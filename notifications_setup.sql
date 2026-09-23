-- =====================================================
-- UniFy Bildiriş Sistemi - Supabase SQL Setup
-- Bu faylı Supabase SQL Editor-da işlədin
-- SUPABASE_URL: https://wkoxusepqljmtvgaynqk.supabase.co
-- =====================================================

-- 1. Push abunəliklərini saxlayan cədvəl
CREATE TABLE IF NOT EXISTS push_subscriptions (
    id BIGSERIAL PRIMARY KEY,
    endpoint TEXT UNIQUE NOT NULL,
    p256dh TEXT NOT NULL,
    auth TEXT NOT NULL,
    user_agent TEXT,
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- 2. Bildiriş tarixçəsini saxlayan cədvəl
CREATE TABLE IF NOT EXISTS notifications (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL DEFAULT 'UniFy',
    body TEXT NOT NULL,
    scheduled_at TIMESTAMPTZ NOT NULL,
    sent_at TIMESTAMPTZ,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
    recipient_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. RLS (Row Level Security) aktiv et
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- 4. push_subscriptions üçün policy-lər
-- İstifadəçilər öz abunəliklərini əlavə edə bilər
CREATE POLICY "Allow insert push_subscriptions"
    ON push_subscriptions FOR INSERT
    WITH CHECK (true);

-- İstifadəçilər öz abunəliklərini yeniləyə bilər
CREATE POLICY "Allow update push_subscriptions"
    ON push_subscriptions FOR UPDATE
    USING (true);

-- İstifadəçilər öz abunəliklərini oxuya bilər
CREATE POLICY "Allow select push_subscriptions"
    ON push_subscriptions FOR SELECT
    USING (true);

-- 5. notifications üçün policy-lər
-- Hamı bildirişləri oxuya bilər
CREATE POLICY "Allow select notifications"
    ON notifications FOR SELECT
    USING (true);

-- Hamı bildiriş əlavə edə bilər (admin panel üçün)
CREATE POLICY "Allow insert notifications"
    ON notifications FOR INSERT
    WITH CHECK (true);

-- Hamı bildirişi yeniləyə bilər
CREATE POLICY "Allow update notifications"
    ON notifications FOR UPDATE
    USING (true);

-- =====================================================
-- Yoxlama sorğuları:
-- SELECT COUNT(*) FROM push_subscriptions WHERE is_active = true;
-- SELECT * FROM notifications ORDER BY created_at DESC LIMIT 10;
-- =====================================================
