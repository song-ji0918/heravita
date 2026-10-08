ALTER TABLE public.phuket_consultations ADD COLUMN destination text NOT NULL DEFAULT 'phuket' CHECK (destination IN ('phuket','china','europe','usa'));
ALTER TABLE public.phuket_consultations DROP CONSTRAINT phuket_consultations_stage_check;
ALTER TABLE public.phuket_consultations ADD CONSTRAINT phuket_consultations_stage_check CHECK (stage IN ('discover','reset','rebuild','flourish','local_support','medical_coordination'));
COMMENT ON TABLE public.phuket_consultations IS 'Private global HeraVita concierge requests; legacy table name retained. Region and consultation purpose recorded. No visitor read or write access.';
GRANT ALL ON public.phuket_consultations TO service_role;
REVOKE ALL ON public.phuket_consultations FROM anon, authenticated;
ALTER TABLE public.phuket_consultations ENABLE ROW LEVEL SECURITY;