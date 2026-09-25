-- ============================================
-- UniFy - Supabase SQL Kodu
-- "orders" cədvəlini yaratmaq üçün
-- Bu kodu Supabase SQL Editor-da işlədin
-- ============================================

-- Cədvəli yarat
CREATE TABLE IF NOT EXISTS orders (
    id              BIGSERIAL PRIMARY KEY,
    action_type     TEXT NOT NULL DEFAULT 'install_click',
    -- action_type dəyərləri:
    --   'install_button_clicked'  → Android/Desktop install düyməsinə basıldı
    --   'ios_banner_shown'        → iOS install banneri göründü
    --   'ios_banner_closed'       → iOS install banneri bağlandı
    --   'app_installed'           → Tətbiq uğurla quraşdırıldı
    --   'install_prompt_accepted' → Quraşdırma təsdiqləndi
    --   'install_prompt_dismissed'→ Quraşdırma ləğv edildi
    clicked_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    page_url        TEXT,
    referrer        TEXT,
    device          TEXT,        -- iPhone, iPad, Android, Desktop, Mobile
    browser         TEXT,        -- Chrome, Safari, Firefox, Edge, Samsung Browser ...
    operating_system TEXT,       -- iOS (iPhone), Android, Windows, macOS, Linux ...
    install_type    TEXT,        -- iOS Install Banner, Android/Desktop Install Prompt
    language        TEXT,        -- az, ru, en
    user_agent      TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- İndeksler (sürətli sorğu üçün)
CREATE INDEX IF NOT EXISTS idx_orders_clicked_at     ON orders (clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_action_type    ON orders (action_type);
CREATE INDEX IF NOT EXISTS idx_orders_device         ON orders (device);
CREATE INDEX IF NOT EXISTS idx_orders_operating_system ON orders (operating_system);

-- Row Level Security (RLS) - Yalnız anonim insert icazəsi
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Hər kəs insert edə bilər (anon key ilə)
CREATE POLICY "allow_anon_insert"
    ON orders
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Yalnız authenticated istifadəçilər oxuya bilər (admin panel üçün)
CREATE POLICY "allow_auth_select"
    ON orders
    FOR SELECT
    TO authenticated
    USING (true);

-- ============================================
-- Faydalı Sorğular (Statistika üçün)
-- ============================================

-- Ümumi statistika
-- SELECT
--     action_type,
--     COUNT(*) as say,
--     MIN(clicked_at) as ilk_tarix,
--     MAX(clicked_at) as son_tarix
-- FROM orders
-- GROUP BY action_type
-- ORDER BY say DESC;

-- Cihaz üzrə statistika
-- SELECT device, COUNT(*) as say
-- FROM orders
-- GROUP BY device
-- ORDER BY say DESC;

-- ƏS üzrə statistika
-- SELECT operating_system, COUNT(*) as say
-- FROM orders
-- GROUP BY operating_system
-- ORDER BY say DESC;

-- Brauzer üzrə statistika
-- SELECT browser, COUNT(*) as say
-- FROM orders
-- GROUP BY browser
-- ORDER BY say DESC;

-- Dil üzrə statistika
-- SELECT language, COUNT(*) as say
-- FROM orders
-- GROUP BY language
-- ORDER BY say DESC;

-- Günlük statistika
-- SELECT
--     DATE(clicked_at) as tarix,
--     COUNT(*) as say
-- FROM orders
-- WHERE clicked_at >= NOW() - INTERVAL '30 days'
-- GROUP BY DATE(clicked_at)
-- ORDER BY tarix DESC;
