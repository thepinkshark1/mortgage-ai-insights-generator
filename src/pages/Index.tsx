
import { useState } from "react";
import { Play, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

export default function Index() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            הטכנולוגיה שמשדרגת יועצי משכנתאות רגילים למומחי סגירה ושיווק
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            יותר סגירות. פחות מאמץ. המערכת שמנתחת את שיחות ופגישות המכירה שלך, ומספקת לך משוב אישי, תובנות מעשיות, תוצרי שיווק מוכנים והודעות פולו-אפ מותאמות לכל לקוח - הכל בלחיצת כפתור.
          </p>
          <button className="button-primary">
            התחל ניסיון חינם <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Problem Section */}
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
              <p className="text-lg">
                במשך שנים, הייתי בדיוק במקום שבו נמצאים רבים מאיתנו. יועץ משכנתאות מקצועי שמגשש באפלה בכל מה שקשור למכירות. מנחש. מנסה. מקווה ובעיקר מ-ת-ב-ל-ג-ן.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">המחיר האמיתי של בינוניות במכירות:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent shrink-0" />
                    <span>על כל לקוח אחד שסגרת, 5 אחרים הלכו ליועץ אחר</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent shrink-0" />
                    <span>הודעות פולו אפ פשוטות שמעולם לא שלחת</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent shrink-0" />
                    <span>תוכן שיווקי שתמיד נדחה ל"יום אחר"</span>
                  </li>
                </ul>
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

      {/* שאר הסקשנים ימשיכו כאן... */}

      {/* Call to Action */}
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
    </div>
  );
}
