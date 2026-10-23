import { useTranslation } from "react-i18next";

// The booking form has its own complete copy set, including conditional states.
const spanish = {
  "A quiet life journey sanctuary": "Un refugio sereno para tu viaje vital",
  "Your Private Life Journey": "Tu viaje vital privado",
  "Begin with a Personal Conversation": "Comienza con una conversación personal",
  "There is no need to decide today. Let us understand what matters to you now.":
    "No necesitas decidir hoy. Permítenos comprender qué es lo más importante para ti en este momento.",
  "Thank you": "Gracias por tu confianza",
  "Your Application Has Been Received": "Hemos recibido tu solicitud",
  "Your preferences have been securely recorded and a private advisor will be in touch. Dates, scope and fees require separate confirmation.":
    "Tus preferencias se han registrado de forma segura y un asesor privado se pondrá en contacto contigo. Las fechas, los servicios y las tarifas se confirmarán por separado.",
  "Explore the Life Journey": "Explorar el viaje vital",
  "Back to HeraVita": "Volver a HeraVita",
  "Journey and Destination": "Viaje y destino",
  "Life stage of interest": "Etapa vital que te interesa",
  "Life Discovery": "Descubrimiento de la vida",
  "Life Reset": "Reinicio de la vida",
  "Life Rebuilding": "Reconstrucción de la vida",
  "Life Flourishing": "Plenitud de la vida",
  "Guide me first": "Prefiero hablar primero con un asesor",
  Duration: "Duración",
  " days": " días",
  " nights": " noches",
  "28 days": "28 días",
  "90 days": "90 días",
  "6 months": "6 meses",
  "12 months": "12 meses",
  " support": " de acompañamiento",
  "Indicative investment": "Inversión orientativa",
  "From ": "Desde ",
  "View full inclusions": "Ver todos los servicios incluidos",
  "Choose a stage of interest, or decide after speaking with an advisor.":
    "Puedes elegir una etapa de interés o decidir después de hablar con un asesor.",
  "Authorized partner client price: RMB ¥29,800 / USD $4,500, subject to verification.":
    "Precio exclusivo para clientes de socios autorizados: RMB ¥29,800 / USD $4,500, sujeto a verificación.",
  Destination: "Destino / motivo de consulta",
  "Phuket, Thailand": "Phuket, Tailandia",
  China: "China",
  "United States": "Estados Unidos",
  Europe: "Europa",
  "Not decided": "Aún no lo he decidido",
  "Preferred US region": "Región preferida de Estados Unidos",
  "New York": "Nueva York",
  Boston: "Boston",
  "Rochester / Minnesota": "Rochester / Minnesota",
  Cleveland: "Cleveland",
  "San Francisco Bay Area": "Área de la Bahía de San Francisco",
  "I have medical records ready": "Tengo documentación médica disponible",
  "What Matters Most": "Lo que más te importa",
  "Energy and recovery": "Energía y recuperación",
  "Sleep and emotional balance": "Sueño y equilibrio emocional",
  "Metabolism and weight": "Metabolismo y control del peso",
  "Precision testing and assessment": "Pruebas de precisión y evaluación médica",
  "Partnership and family": "Relación de pareja y familia",
  "International medical coordination": "Coordinación médica internacional",
  "Anything you would like to share (optional)":
    "¿Qué te gustaría compartir con tu asesor? (opcional)",
  "Timing and Companions": "Fechas y acompañantes",
  "Preferred date (optional)": "Fecha de visita preferida (opcional)",
  "I would like to join with my partner": "Me gustaría participar con mi pareja en la misma etapa",
  "Two partners in the same stage: combined package total × 90%.":
    "Para dos personas en pareja que participan en la misma etapa: total de ambos programas × 90%.",
  "Your Details": "Tus datos de contacto",
  "Full name *": "Nombre completo *",
  "Preferred language": "Idioma de comunicación",
  "Contact method *": "Medio de contacto *",
  WeChat: "WeChat",
  Phone: "Teléfono",
  Email: "Correo electrónico",
  "Number / account *": "Número / cuenta *",
  "I agree that HeraVita may use this information to arrange my consultation and contact me.":
    "Acepto que HeraVita utilice esta información para organizar mi consulta y ponerse en contacto conmigo.",
  "After you apply, your private advisor will confirm dates, scope and fees with you. Medical services are arranged following physician assessment.":
    "Tras enviar la solicitud, tu asesor privado confirmará contigo las fechas, los servicios y las tarifas. Los servicios médicos se organizarán después de una evaluación médica.",
  Submitting: "Enviando",
  "Submit Application": "Enviar solicitud",
  "Please enter your name and valid contact details, and confirm your consent.":
    "Introduce tu nombre y datos de contacto válidos y confirma tu consentimiento.",
  "Unable to submit right now. Your entries are retained; please try again later.":
    "No se puede enviar la solicitud en este momento. Tus datos siguen en el formulario; inténtalo de nuevo más tarde.",
};

const arabic: Record<keyof typeof spanish, string> = {
  "A quiet life journey sanctuary": "ملاذ هادئ لرحلتك الحياتية",
  "Your Private Life Journey": "رحلتك الحياتية الخاصة",
  "Begin with a Personal Conversation": "ابدأ بمحادثة شخصية",
  "There is no need to decide today. Let us understand what matters to you now.":
    "لا حاجة لاتخاذ قرار اليوم. دعنا نفهم ما يهمك حقًا في هذه المرحلة من حياتك.",
  "Thank you": "شكرًا لثقتك",
  "Your Application Has Been Received": "تم استلام طلبك",
  "Your preferences have been securely recorded and a private advisor will be in touch. Dates, scope and fees require separate confirmation.":
    "تم تسجيل تفضيلاتك بأمان، وسيتواصل معك مستشار خاص. تُؤكَّد المواعيد والخدمات والرسوم بشكل منفصل.",
  "Explore the Life Journey": "استكشف الرحلة الحياتية",
  "Back to HeraVita": "العودة إلى HeraVita",
  "Journey and Destination": "الرحلة والوجهة",
  "Life stage of interest": "المرحلة الحياتية التي تهمك",
  "Life Discovery": "اكتشاف الحياة",
  "Life Reset": "استعادة توازن الحياة",
  "Life Rebuilding": "إعادة بناء الحياة",
  "Life Flourishing": "ازدهار الحياة",
  "Guide me first": "أود التحدث إلى مستشار أولًا",
  Duration: "المدة",
  " days": " أيام",
  " nights": " ليالٍ",
  "28 days": "28 يومًا",
  "90 days": "90 يومًا",
  "6 months": "6 أشهر",
  "12 months": "12 شهرًا",
  " support": " من المتابعة",
  "Indicative investment": "التكلفة التقديرية",
  "From ": "ابتداءً من ",
  "View full inclusions": "عرض جميع الخدمات المشمولة",
  "Choose a stage of interest, or decide after speaking with an advisor.":
    "يمكنك اختيار المرحلة التي تهمك الآن، أو اتخاذ القرار بعد التحدث إلى مستشار.",
  "Authorized partner client price: RMB ¥29,800 / USD $4,500, subject to verification.":
    "سعر خاص لعملاء الشركاء المعتمدين: RMB ¥29,800 / USD $4,500، بعد التحقق من الأهلية.",
  Destination: "الوجهة / موضوع الاستشارة",
  "Phuket, Thailand": "فوكيت، تايلاند",
  China: "الصين",
  "United States": "الولايات المتحدة",
  Europe: "أوروبا",
  "Not decided": "لم أقرر بعد",
  "Preferred US region": "المنطقة المفضلة في الولايات المتحدة",
  "New York": "نيويورك",
  Boston: "بوسطن",
  "Rochester / Minnesota": "روتشستر / مينيسوتا",
  Cleveland: "كليفلاند",
  "San Francisco Bay Area": "منطقة خليج سان فرانسيسكو",
  "I have medical records ready": "لدي سجلات طبية متاحة للمراجعة",
  "What Matters Most": "ما الذي يهمك أكثر؟",
  "Energy and recovery": "الطاقة والتعافي",
  "Sleep and emotional balance": "النوم والتوازن العاطفي",
  "Metabolism and weight": "الأيض وإدارة الوزن",
  "Precision testing and assessment": "الفحوص الدقيقة والتقييم الطبي",
  "Partnership and family": "العلاقة مع شريك الحياة والأسرة",
  "International medical coordination": "التنسيق الطبي الدولي",
  "Anything you would like to share (optional)": "ما الذي تود مشاركته مع المستشار؟ (اختياري)",
  "Timing and Companions": "موعد الزيارة والمرافقون",
  "Preferred date (optional)": "تاريخ الزيارة المفضل (اختياري)",
  "I would like to join with my partner": "أرغب في المشاركة مع شريك حياتي في المرحلة نفسها",
  "Two partners in the same stage: combined package total × 90%.":
    "لشريكين يشاركان في المرحلة نفسها: إجمالي تكلفة البرنامجين × 90%.",
  "Your Details": "بيانات التواصل",
  "Full name *": "الاسم الكامل *",
  "Preferred language": "لغة التواصل المفضلة",
  "Contact method *": "وسيلة التواصل *",
  WeChat: "وي تشات",
  Phone: "الهاتف",
  Email: "البريد الإلكتروني",
  "Number / account *": "الرقم / الحساب *",
  "I agree that HeraVita may use this information to arrange my consultation and contact me.":
    "أوافق على استخدام HeraVita لهذه المعلومات لترتيب استشارتي والتواصل معي.",
  "After you apply, your private advisor will confirm dates, scope and fees with you. Medical services are arranged following physician assessment.":
    "بعد إرسال الطلب، سيؤكد معك مستشارك الخاص المواعيد والخدمات والرسوم. تُرتَّب الخدمات الطبية بعد تقييم الطبيب.",
  Submitting: "جارٍ الإرسال",
  "Submit Application": "إرسال الطلب",
  "Please enter your name and valid contact details, and confirm your consent.":
    "يرجى إدخال اسمك وبيانات تواصل صالحة وتأكيد موافقتك.",
  "Unable to submit right now. Your entries are retained; please try again later.":
    "يتعذر إرسال الطلب حاليًا. ما أدخلته لا يزال في النموذج؛ يرجى المحاولة لاحقًا.",
};

const translations: Record<string, Record<string, string>> = { es: spanish, ar: arabic };

export function useBookingCopy() {
  const { i18n } = useTranslation();
  const language = i18n.language.split("-")[0];
  const t = (zh: string, english: string) =>
    language === "zh" ? zh : (translations[language]?.[english] ?? english);
  return { i18n, language, t };
}
