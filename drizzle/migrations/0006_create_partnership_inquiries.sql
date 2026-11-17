CREATE TABLE public.partnership_inquiries (
 id uuid PRIMARY KEY,
 created_at timestamptz NOT NULL DEFAULT now(),
 institution_type text NOT NULL,
 institution_name text NOT NULL CHECK (char_length(institution_name) BETWEEN 1 AND 160),
 country_city text NOT NULL CHECK (char_length(country_city) BETWEEN 1 AND 120),
 website text NOT NULL DEFAULT '' CHECK (char_length(website) <= 300),
 cooperation text[] NOT NULL,
 proposal text NOT NULL CHECK (char_length(proposal) BETWEEN 10 AND 2000),
 title text NOT NULL,
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 80),
 position text NOT NULL CHECK (char_length(position) BETWEEN 1 AND 100),
 contact_method text NOT NULL,
 contact text NOT NULL CHECK (char_length(contact) BETWEEN 3 AND 120),
 communication text NOT NULL,
 language text NOT NULL,
 consent boolean NOT NULL CHECK (consent = true),
 notification_status text NOT NULL DEFAULT 'pending',
 notified_at timestamptz
);
GRANT ALL ON public.partnership_inquiries TO service_role;
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;