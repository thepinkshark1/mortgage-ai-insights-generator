import { useState } from "react";
import { Play, CheckCircle2, ArrowRight, Mic, MessageSquare, FileText, Clock, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative">
        <div className="max-w-7xl mx-auto text-center px-4 py-24 relative z-10">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text-vibrant mb-6 leading-tight max-w-5xl">
              הופכים יועצי משכנתאות רגילים למומחי שיווק ומכירות
            </h1>
            
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto mb-12 gradient-text-subtle leading-relaxed font-medium">
              יותר סגירות. פחות מאמץ. אפס עובדים חדשים.
              <br />
              המערכת שמנתחת את שיחות המכירה שלך ומייצרת משוב אישי, תוכן שיווקי מותאם והודעות מעקב מדויקות - הכל בלחיצת כפתור.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="button-primary text-lg flex items-center">
                התחל ניסיון חינם עכשיו
                <ArrowRight className="mr-2 ml-0 h-5 w-5" />
              </button>
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="bg-white text-gradient-start border border-gradient-start/20 font-medium px-8 py-3 rounded-lg hover:bg-gradient-start/5 transition-all flex items-center shadow-md"
              >
                <Play className="mr-0 ml-2 h-5 w-5" />
                צפה בהדגמה
              </button>
            </div>
            
            <div className="mt-12 text-muted-foreground">
              <p>ללא התחייבות. בטל בכל עת.</p>
            </div>
          </div>
        </div>
        
        {/* Blob shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-start/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-end/10 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-vibrant">
              איך המערכת עובדת?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              תהליך פשוט וקל שחוסך זמן וכסף
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-gradient p-6 rounded-2xl float">
              <div className="bg-gradient-start/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Mic className="text-gradient-start h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">העלאת הקלטה</h3>
              <p className="text-muted-foreground">פשוט מעלים את הקלטת שיחת המכירה שלך למערכת</p>
            </div>
            
            <div className="card-gradient p-6 rounded-2xl float" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-mid/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageSquare className="text-gradient-mid h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ניתוח אוטומטי</h3>
              <p className="text-muted-foreground">המערכת מנתחת את השיחה ומזהה הזדמנויות לשיפור</p>
            </div>
            
            <div className="card-gradient p-6 rounded-2xl float" style={{ animationDelay: "0.4s" }}>
              <div className="bg-gradient-end/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="text-gradient-end h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">קבלת תוצרים</h3>
              <p className="text-muted-foreground">קבלת משוב אישי ותוכן שיווקי מותאם במגוון פורמטים</p>
            </div>
            
            <div className="card-gradient p-6 rounded-2xl float" style={{ animationDelay: "0.6s" }}>
              <div className="bg-gradient-start/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Zap className="text-gradient-start h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">שימוש מיידי</h3>
              <p className="text-muted-foreground">משתמשים בתוצרים כדי לשפר את השיחות הבאות ולהגדיל את שיעור הסגירה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-vibrant">
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
                <p className="text-lg font-bold gradient-text-subtle">
                  אבל היום זה נגמר.
                </p>
                <p className="text-lg">
                  למי שלא מכיר, אני שמעון שטרית, והיום אני לא רוצה ולא מוכן לדבר על כאב.
                </p>
              </div>
              
              <div className="card-gradient p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 gradient-text-subtle">המחיר האמיתי של בינוניות במכירות:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gradient-mid shrink-0 mt-1" />
                    <span>על כל לקוח אחד שסגרת, 5 אחרים הלכו ליועץ אחר</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gradient-mid shrink-0 mt-1" />
                    <span>הודעות פולו אפ פשוטות שמעולם לא שלחת כי לא ידעת איך ומה לכתוב או כי לא רצית להישמע מציק</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gradient-mid shrink-0 mt-1" />
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
            <div className="card-gradient p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">יועץ משכנתאות ממוצע מפספס</h3>
              <p className="text-4xl md:text-6xl font-bold gradient-text-vibrant mb-2">₪152,000</p>
              <p className="text-xl">בשנה בגלל הפערים האלה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-vibrant">
              ראה את המערכת בפעולה
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              בדוק איך המערכת יכולה לעזור לך להגדיל את ההכנסות ולשפר את יכולות המכירה שלך
            </p>
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            {!isVideoPlaying ? (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <div className="text-center text-white">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Play className="w-10 h-10 text-white mr-[-2px]" />
                  </div>
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

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-gradient-start to-gradient-end text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            הצטרפו ל-50 יועצי המשכנתאות החכמים
          </h2>
          <p className="text-xl mb-8">
            שבוע התנסות ללא עלות - מוגבל ל-50 המצטרפים הראשונים!
          </p>
          <button className="bg-white text-gradient-start font-medium px-8 py-3 rounded-lg hover:bg-white/90 transition-all shadow-lg text-lg flex items-center mx-auto">
            התחל ניסיון חינם עכשיו
            <ArrowRight className="mr-2 ml-0 h-5 w-5" />
          </button>
          <p className="mt-4 text-white/80">
            ללא התחייבות. בטל בכל עת.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text-vibrant">
            שאלות נפוצות
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-2xl overflow-hidden border-none shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">כמה זמן לוקח לנתח שיחה?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-muted-foreground">בדרך כלל 2-5 דקות, תלוי באורך השיחה.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-2xl overflow-hidden border-none shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">איך מעלים הקלטה למערכת?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-muted-foreground">פשוט גוררים את קובץ ההקלטה לאזור המיועד במערכת. המערכת תומכת ב-MP3, WAV, M4A ופורמטים נפוצים אחרים.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-2xl overflow-hidden border-none shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">מה קורה אם השיחה לא בעברית?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-muted-foreground">המערכת תומכת גם באנגלית! בקרוב נוסיף שפות נוספות.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-2xl overflow-hidden border-none shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">האם המידע שלי מאובטח?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-muted-foreground">בהחלט! כל ההקלטות מוצפנות ומאוחסנות באופן מאובטח. אנחנו לא משתמשים בנתונים שלך לשום מטרה אחרת.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-2xl overflow-hidden border-none shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">למי מתאימה המערכת?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="text-muted-foreground">המערכת מתאימה ליועצי משכנתאות בכל הרמות - מהמתחילים ועד המנוסים ביותר. אם אתם מדברים עם לקוחות, המערכת תעזור לכם.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-2xl overflow-hidden border-none shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">מה העלות בסיום תקופת ההתנסות?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-right">
                <h3 className="font-bold mb-4 gradient-text-subtle">חבילות חודשיות</h3>
                
                <div className="space-y-6">
                  <div className="bg-light-gray p-4 rounded-lg">
                    <h4 className="font-semibold gradient-text-subtle">חבילת "סטארטר" – 8 הקלטות</h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                      <li>8 הקלטות בחודש</li>
                      <li>מוצרי תוכן בהתאמה אישית לפי תוצר מוגדר מראש</li>
                    </ul>
                    <p className="mt-2">מחיר חודשי: <span className="font-bold">196 ש"ח</span></p>
                    <p>עלות לקלטה: <span className="font-bold">24.5 ש"ח</span></p>
                    <p>מנוי שנתי (12 תשלומים): <span className="font-bold">2,352 ש"ח</span></p>
                    <p>כולל חודשיים מתנה – סה"כ 14 חודשי שימוש</p>
                    <p>עלות אפקטיבית לקלטה במנוי שנתי: <span className="font-bold">21 ש"ח להקלטה</span></p>
                  </div>

                  <div className="bg-light-gray p-4 rounded-lg">
                    <h4 className="font-semibold gradient-text-subtle">חבילת "קריאייטור" – 24 הקלטות</h4>
                    <p className="mt-2">מחיר חודשי: <span className="font-bold">528 ש"ח</span></p>
                    <p>עלות להקלטה: <span className="font-bold">22 ש"ח</span></p>
                    <p>מנוי שנתי (12 תשלומים): <span className="font-bold">6,336 ש"ח</span></p>
                    <p>כולל חודשיים מתנה – סה"כ 14 חודשי שימוש</p>
                    <p>עלות אפקטיבית להקלטה: <span className="font-bold">18.9 ש"ח</span></p>
                  </div>

                  <div className="bg-light-gray p-4 rounded-lg">
                    <h4 className="font-semibold gradient-text-subtle">חבילת "פרימיום" – 48 הקלטות</h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                      <li>ליווי אסטרטגי אישי פעם בחודש עם שמעון שטרית</li>
                      <li>מתאים לעסקים מבוססים ויוצרי תוכן כבדים</li>
                    </ul>
                    <p className="mt-2">מחיר חודשי: <span className="font-bold">912 ש"ח</span></p>
                    <p>עלות להקלטה: <span className="font-bold">19 ש"ח</span></p>
                    <p>מנוי שנתי (12 תשלומים): <span className="font-bold">10,944 ש"ח</span></p>
                    <p>כולל חודשיים מתנה – סה"כ 14 חודשי שימוש</p>
                    <p>עלות אפקטיבית לקלטה: <span className="font-bold">16.3 ש"ח</span></p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-light-gray p-4 rounded-lg border border-gradient-start/10">
                    <h4 className="font-semibold gradient-text-subtle">הטבות כלליות בכל החבילות</h4>
                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                      <li>תקופת ניסיון: שבוע ראשון – עד 3 הקלטות חינם</li>
                      <li>שירות אנושי זמין: מענה אישי מהיר</li>
                      <li>ללא הגבלה על אורך ההקלטה (מומלץ עד 90 דק')</li>
                      <li>מעבר גמיש בין חבילות</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">כל המחירים לא כוללים מע״מ כדין.</p>
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
