# ============================================================
#  Proxy local pour Systeme Expert Entreprise
#  Ecoute sur http://localhost:3456 et transmet a Anthropic
#  Double-cliquez sur ce fichier (ou lancez-le en PowerShell)
# ============================================================

$port = 3456
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
} catch {
    Write-Host ""
    Write-Host "ERREUR : impossible de demarrer le proxy." -ForegroundColor Red
    Write-Host "Verifiez qu'aucun autre programme n'utilise le port $port." -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Appuyez sur Entree pour quitter"
    exit 1
}

Write-Host ""
Write-Host "  =================================" -ForegroundColor Cyan
Write-Host "   Proxy demarre sur le port $port  " -ForegroundColor Cyan
Write-Host "  =================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Dans le navigateur, cochez 'Utiliser le proxy local'" -ForegroundColor Green
Write-Host "  puis lancez votre analyse." -ForegroundColor Green
Write-Host ""
Write-Host "  Appuyez sur Ctrl+C pour arreter le proxy." -ForegroundColor Gray
Write-Host ""

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $req     = $context.Request
        $res     = $context.Response

        # Headers CORS
        $res.Headers.Add("Access-Control-Allow-Origin",  "*")
        $res.Headers.Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        $res.Headers.Add("Access-Control-Allow-Headers", "Content-Type, x-api-key, anthropic-version, anthropic-beta")

        if ($req.HttpMethod -eq "OPTIONS") {
            $res.StatusCode = 200
            $res.Close()
            continue
        }

        # Lire le corps de la requete
        $reader  = New-Object System.IO.StreamReader($req.InputStream, [System.Text.Encoding]::UTF8)
        $body    = $reader.ReadToEnd()
        $reader.Close()

        # Transmettre a l'API Anthropic
        $bodyBytes = [System.Text.Encoding]::UTF8.GetBytes($body)
        $webReq    = [System.Net.WebRequest]::Create("https://api.anthropic.com/v1/messages")
        $webReq.Method        = "POST"
        $webReq.ContentType   = "application/json"
        $webReq.ContentLength = $bodyBytes.Length
        $webReq.Headers.Add("x-api-key",          $req.Headers["x-api-key"])
        $webReq.Headers.Add("anthropic-version",   "2023-06-01")
        $webReq.Timeout       = 120000  # 2 minutes

        $betaHeader = $req.Headers["anthropic-beta"]
        if ($betaHeader) { $webReq.Headers.Add("anthropic-beta", $betaHeader) }

        $stream = $webReq.GetRequestStream()
        $stream.Write($bodyBytes, 0, $bodyBytes.Length)
        $stream.Close()

        try {
            $webRes     = $webReq.GetResponse()
            $statusCode = [int]$webRes.StatusCode
        } catch [System.Net.WebException] {
            $webRes     = $_.Exception.Response
            $statusCode = if ($webRes) { [int]$webRes.StatusCode } else { 500 }
        }

        $resReader   = New-Object System.IO.StreamReader($webRes.GetResponseStream(), [System.Text.Encoding]::UTF8)
        $resBody     = $resReader.ReadToEnd()
        $resReader.Close()
        $webRes.Close()

        $resBytes = [System.Text.Encoding]::UTF8.GetBytes($resBody)
        $res.StatusCode       = $statusCode
        $res.ContentType      = "application/json"
        $res.ContentLength64  = $resBytes.Length
        $res.OutputStream.Write($resBytes, 0, $resBytes.Length)
        $res.Close()

        Write-Host "  [$(Get-Date -Format 'HH:mm:ss')]  $statusCode  $(($body | ConvertFrom-Json).messages[0].content.Substring(0,[Math]::Min(60,($body | ConvertFrom-Json).messages[0].content.Length)))..." -ForegroundColor DarkGray

    } catch {
        Write-Host "  [ERREUR] $($_.Exception.Message)" -ForegroundColor Red
        try { $context.Response.StatusCode = 500; $context.Response.Close() } catch {}
    }
}
