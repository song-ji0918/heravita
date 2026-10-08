CREATE TABLE public.phuket_consultations (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 title text NOT NULL,
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 stage text NOT NULL CHECK (stage IN ('discover','reset','rebuild')),
 arrival_date date,
 guests integer NOT NULL CHECK (guests BETWEEN 1 AND 10),
 partner_consultation boolean NOT NULL DEFAULT false,
 contact_method text NOT NULL CHECK (contact_method IN ('email','phone','wechat')),
 contact text NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 255),
 message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 1000),
 consent boolean NOT NULL CHECK (consent = true)
);
GRANT ALL ON public.phuket_consultations TO service_role;
ALTER TABLE public.phuket_consultations ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.phuket_consultations IS 'Private Phuket concierge requests, readable only through Lovable Cloud by the project owner. No visitor read or write access.';