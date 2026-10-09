CREATE TABLE public.usa_consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 80),
  contact_method text NOT NULL CHECK (contact_method IN ('wechat', 'phone', 'email')),
  contact text NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 120),
  focus text NOT NULL CHECK (focus IN ('advanced_medicine', 'precision_health', 'genomics', 'longevity_science', 'expert_matching', 'pathway_coordination')),
  preferred_region text NOT NULL CHECK (preferred_region IN ('new_york', 'boston', 'rochester_minnesota', 'cleveland', 'bay_area', 'undecided')),
  preferred_timing text CHECK (preferred_timing IS NULL OR char_length(preferred_timing) <= 80),
  records_ready boolean NOT NULL DEFAULT false,
  companion boolean NOT NULL DEFAULT false,
  preferred_language text NOT NULL CHECK (preferred_language IN ('zh', 'en', 'es', 'ar', 'other')),
  message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 1000),
  consent boolean NOT NULL CHECK (consent = true),
  source text NOT NULL DEFAULT 'usa_consultation' CHECK (source = 'usa_consultation')
);

GRANT INSERT ON public.usa_consultations TO anon;
GRANT INSERT ON public.usa_consultations TO authenticated;
GRANT ALL ON public.usa_consultations TO service_role;

ALTER TABLE public.usa_consultations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone may submit a USA consultation"
ON public.usa_consultations
FOR INSERT
TO anon, authenticated
WITH CHECK (
  consent = true
  AND source = 'usa_consultation'
  AND char_length(full_name) BETWEEN 1 AND 80
  AND char_length(contact) BETWEEN 3 AND 120
  AND char_length(message) <= 1000
);