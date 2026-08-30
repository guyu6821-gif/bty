-- ============================================================
-- UniFy - Supabase "orders" cədvəli yaratmaq üçün SQL
-- Supabase SQL Editor-da bu kodu işlədin
-- ============================================================

-- orders cədvəlini yarat
CREATE TABLE IF NOT EXISTS public.orders (
    id          BIGSERIAL PRIMARY KEY,
    clicked_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    page_url    TEXT,
    referrer    TEXT,
    device      TEXT,
    browser     TEXT,
    operating_system TEXT
);

-- Cədvəl üçün RLS (Row Level Security) aktiv et
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Anon key ilə INSERT icazəsi ver (yalnız yazma, oxuma yox)
CREATE POLICY "Allow anon insert"
    ON public.orders
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- (İstəyə bağlı) authenticated istifadəçilər üçün tam icazə
CREATE POLICY "Allow authenticated all"
    ON public.orders
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ============================================================
-- Qeyd: Yuxarıdakı SQL-i Supabase Dashboard-da
-- SQL Editor bölməsinə yapışdırıb "Run" düyməsinə basın.
-- ============================================================
