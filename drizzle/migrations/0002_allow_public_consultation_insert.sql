GRANT INSERT ON public.phuket_consultations TO anon, authenticated;
GRANT ALL ON public.phuket_consultations TO service_role;
ALTER TABLE public.phuket_consultations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit consultations" ON public.phuket_consultations FOR INSERT TO anon, authenticated WITH CHECK (consent = true);