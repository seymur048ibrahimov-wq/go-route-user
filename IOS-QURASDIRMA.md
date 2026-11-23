# Go Route müştəri tətbiqi — iOS (App Store) quraşdırması

Mac və iPhone lazım deyil. Tətbiq Codemagic buludunda qurulur və TestFlight-a yüklənir.

## Əvvəlcə lazım olanlar
1. **Apple Developer üzvlüyü** (99 $/il). GO ROUTE MMC üçün təşkilat hesabı D-U-N-S nömrəsi tələb edir. Şəxsi hesab D-U-N-S istəmir, sonra şirkətə keçirmək çətindir.
2. **Bundle ID:** developer.apple.com → Certificates, Identifiers & Profiles → Identifiers → `com.goroute.user` (Explicit). Əlavə capability seçmək lazım deyil.
3. **App Store Connect-də tətbiq yarat:** My Apps → + → New App → ad `Go Route`, dil Azerbaijani/English, Bundle ID `com.goroute.user`, SKU `goroute-user`.
4. **App Store Connect API açarı:** Users and Access → Integrations → Team Keys → + (rol: App Manager). `.p8` faylını yükləyin, Key ID və Issuer ID-ni qeyd edin.

## Codemagic
1. codemagic.io → GitHub ilə daxil olun → Add application → `go-route-user` repozitoriyası → "codemagic.yaml" seçin.
2. Teams → Integrations → Apple Developer Portal → Connect: yuxarıdakı açarı yükləyin, adı **`GoRoute-ASC`** yazın (adı dəqiq belə olmalıdır).
3. Build → workflow `ios-release` → Start new build.
4. Uğurlu olarsa tətbiq TestFlight-da görünür (10–30 dəqiqə sonra). Test üçün iPhone lazımdır, yoxdursa istənilən tanışın iPhone-una TestFlight ilə göndərin.

## Nə hazırdır
- Bundle ID `com.goroute.user`, ad `Go Route`, ikon 1024×1024 (`resources/icon.png`, `icon-512.png`-dən böyüdülüb, 1024 olan orijinalı varsa əvəz edin).
- Məkan, kamera, şəkil kitabxanası icazə mətnləri Azərbaycan dilində.
- Google ilə giriş iOS-da gizlədilir (tətbiqin öz kodu bunu edir), Apple qaydası 4.8 pozulmur. Yalnız email giriş qalır.
- Hesabı silmə tətbiqin içində var (Apple tələbi).

## Yoxlanmalı və gələcəkdə ediləcək
- **Google Maps açarı:** iOS qabığında sayt `capacitor://localhost` ünvanından açılır. Açarda HTTP referrer məhdudiyyəti varsa, `capacitor://localhost/*` əlavə edin, olmasa xəritə boş qala bilər. TestFlight-da yoxlayın.
- **Push bildirişlər:** veb bildirişlər iOS tətbiqində işləmir. Sonra `@capacitor/push-notifications` və APNs açarı lazımdır.
- **App Store qaydası 4.2 (minimum funksionallıq):** saytı sadəcə qabıqlamaq rədd səbəbi ola bilər. Push bildiriş və xəritə/məkan bu riski azaldır, rəy yazarkən bunları qeyd edin.
- App Store üçün ekran şəkilləri (6,9" iPhone: 1320×2868) və məxfilik siyasəti ünvanı (`privacy-policy.html` yerləşdiyi ünvan) lazımdır.
