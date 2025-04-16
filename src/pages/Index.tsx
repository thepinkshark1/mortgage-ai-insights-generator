import { useState } from "react";
import { Play, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in gradient-text-vibrant mb-6">
            הטכנולוגיה שמשדרגת יועצי משכנתאות רגילים למומחי סגירה ושיווק
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in gradient-text-subtle">
            יותר סגירות. פחות מאמץ. אפס עובדים חדשים.
            <br />
            המערכת שמנתחת את שיחות המכירה שלך ומייצרת משוב אישי, תוכן שיווקי מותאם והודעות מעקב מדויקות - הכל בלחיצת כפתור.
          </p>
        </div>
      </section>

      {/* Rest of the existing code remains the same... */}
      <section className="bg-muted section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              9 מתוך 10 יועצי משכנתאות מבזבזים 80% מהזמן שלהם על שיחות שלא מניבות כלום.
            </h2>
            <p className="text-xl text-muted-foreground">האם גם זה המצב אצלך?</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg">
                  במשך שנים, הייתי בדיוק במקום שבו נמצאים רבים מאיתנו. יועץ משכנתאות מקצועי שמגשש באפלה בכל מה שקשור למכירות. מנחש. מנסה. מקווה ובעיקר מ-ת-ב-ל-ג-ן.
                </p>
                <p className="text-lg">
                  בין אם מדובר על עסק בתחילת הדרך או על עסק עם עשרים שנות ניסיון - כולנו נאבקים באותם האתגרים.
                </p>
                <p className="text-lg font-bold">
                  אבל היום זה נגמר.
                </p>
                <p className="text-lg">
                  למי שלא מכיר, אני שמעון שטרית, והיום אני לא רוצה ולא מוכן לדבר על כאב.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">המחיר האמיתי של בינוניות במכירות:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" />
                    <span>על כל לקוח אחד שסגרת, 5 אחרים הלכו ליועץ אחר</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" />
                    <span>הודעות פולו אפ פשוטות שמעולם לא שלחת כי לא ידעת איך ומה לכתוב או כי לא רצית להישמע מציק</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" />
                    <span>תוכן שיווקי שתכננת להכין ולשגר לאויר אבל תמיד נדחה ל"יום אחר"</span>
                  </li>
                </ul>
                <div className="mt-6 text-lg">
                  <p>במקום לדבר על הבעיות, אני רוצה לדבר על המספרים: יועץ משכנתאות ממוצע מפספס לפחות 152,000 ₪ בשנה בגלל הפערים האלה.</p>
                  <p className="mt-4">המערכת שפיתחנו עבורך סוגרת את הפערים האלו באופן מיידי, ומשחררת אותך מה"דרישה הכפולה" המתישה של המקצוע - להיות גם מומחה משכנתאות וגם מומחה שיווק ומכירות.</p>
                  <p className="mt-4">לראשונה, אפשר להתמקד במה שאנחנו באמת אוהבים ונהנים לעשות, בזמן שהמערכת דואגת לכל השאר.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">יועץ משכנתאות ממוצע מפספס</h3>
              <p className="text-4xl md:text-6xl font-bold text-accent mb-2">₪152,000</p>
              <p className="text-xl">בשנה בגלל הפערים האלה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl mb-12">
            {!isVideoPlaying ? (
              <div 
                className="absolute inset-0 bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-medium">צפה בהדגמה</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-black">
                {/* כאן יהיה הסרטון האמיתי */}
                <p className="text-white text-center p-8">הסרטון יוטמע כאן</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Last section (Call to Action) remains unchanged with button */}
      <section className="hero-gradient section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            הצטרפו ל-50 יועצי המשכנתאות החכמים
          </h2>
          <p className="text-xl mb-8">
            שבוע התנסות ללא עלות - מוגבל ל-50 המצטרפים הראשונים!
          </p>
          <button className="button-primary text-lg">
            התחל ניסיון חינם עכשיו
          </button>
          <p className="mt-4 text-muted-foreground">
            ללא התחייבות. בטל בכל עת.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            שאלות נפוצות
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">
                כמה זמן לוקח לנתח שיחה?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                בדרך כלל 2-5 דקות, תלוי באורך השיחה.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">
                איך מעלים הקלטה למערכת?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                פשוט גוררים את קובץ ההקלטה לאזור המיועד במערכת. המערכת תומכת ב-MP3, WAV, M4A ופורמטים נפוצים אחרים.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">
                מה קורה אם השיחה לא בעברית?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                המערכת תומכת גם באנגלית! בקרוב נוסיף שפות נוספות.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">
                האם המידע שלי מאובטח?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                בהחלט! כל ההקלטות מוצפנות ומאוחסנות באופן מאובטח. אנחנו לא משתמשים בנתונים שלך לשום מטרה אחרת.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">
                למי מתאימה המערכת?
              </AccordionTrigger>
              <AccordionContent className="px-6">
                המערכת מתאימה ליועצי משכנתאות בכל הרמות - מהמתחילים ועד המנוסים ביותר. אם אתם מדברים עם לקוחות, המערכת תעזור לכם.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6">
                מה העלות בסיום תקופת ההתנסות?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-right">
                <h3 className="font-bold mb-4">חבילות חודשיות</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">חבילת "סטארטר" – 8 הקלטות</h4>
                    <ul className="list-disc list-inside">
                      <li>8 הקלטות בחודש</li>
                      <li>מוצרי תוכן בהתאמה אישית לפי תוצר מוגדר מראש</li>
                    </ul>
                    <p>מחיר חודשי: 196 ש"ח</p>
                    <p>עלות לקלטה: 24.5 ש"ח</p>
                    <p>מנוי שנתי (12 תשלומים): 2,352 ש"ח</p>
                    <p>כולל חודשיים מתנה – סה"כ 14 חודשי שימוש</p>
                    <p>עלות אפקטיבית לקלטה במנוי שנתי: 21 ש"ח להקלטה</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">חבילת "קריאייטור" – 24 הקלטות</h4>
                    <p>מחיר חודשי: 528 ש"ח</p>
                    <p>עלות להקלטה: 22 ש"ח</p>
                    <p>מנוי שנתי (12 תשלומים): 6,336 ש"ח</p>
                    <p>כולל חודשיים מתנה – סה"כ 14 חודשי שימוש</p>
                    <p>עלות אפקטיבית להקלטה: 18.9 ש"ח</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">חבילת "פרימיום" – 48 הקלטות</h4>
                    <ul className="list-disc list-inside">
                      <li>ליווי אסטרטגי אישי פעם בחודש עם שמעון שטרית</li>
                      <li>מתאים לעסקים מבוססים ויוצרי תוכן כבדים</li>
                    </ul>
                    <p>מחיר חודשי: 912 ש"ח</p>
                    <p>עלות להקלטה: 19 ש"ח</p>
                    <p>מנוי שנתי (12 תשלומים): 10,944 ש"ח</p>
                    <p>כולל חודשיים מתנה – סה"כ 14 חודשי שימוש</p>
                    <p>עלות אפקטיבית לקלטה: 16.3 ש"ח</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">הטבות כלליות בכל החבילות</h4>
                    <ul className="list-disc list-inside">
                      <li>תקופת ניסיון: שבוע ראשון – עד 3 הקלטות חינם</li>
                      <li>שירות אנושי זמין: מענה אישי מהיר</li>
                      <li>ללא הגבלה על אורך ההקלטה (מומלץ עד 90 דק')</li>
                      <li>מעבר גמיש בין חבילות</li>
                    </ul>
                    <p className="mt-2 text-sm">כל המחירים לא כוללים מע״מ כדין.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
