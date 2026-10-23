import i18n, { SUPPORTED_LANGUAGES } from "@/original/i18n";

for (const { code } of SUPPORTED_LANGUAGES) {
  i18n.addResource(code, "translation", "footer.email", "heravita.digital@outlook.com");
}

export default i18n;
