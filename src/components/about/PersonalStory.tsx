import { SectionHeader } from "../ui/SectionHeader";

export function PersonalStory() {
  return (
    <section className="bg-off-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Roots in Moradabad" 
          subtitle="My journey is intertwined with the story of our brass city."
          isDark={false}
          align="center"
        />
        
        <div className="prose prose-lg prose-slate mx-auto font-sans leading-relaxed text-slate-700">
          <p className="text-xl font-medium text-slate-800 mb-8 border-l-4 border-primary-accent pl-6">
            "I was not born into privilege. I was born into the hustle and warmth of Moradabad. The sound of brass hammering is the soundtrack of my childhood."
          </p>
          
          <p className="mb-6">
            My journey began right here in the streets of Moradabad. Growing up, I witnessed firsthand the resilience of our local artisans, the struggles of our farmers in the rural outskirts, and the untapped potential of our youth. It was this deep connection to our community that drew me toward public service.
          </p>
          
          <p className="mb-6">
            For years, I served as the District President of the Indian National Congress. That role was not just a title; it was a responsibility to listen. I traveled across every ward, every block, sitting with families, understanding their grievances regarding failing infrastructure, lack of decent healthcare, and the alarming rate of unemployment among educated youth.
          </p>
          
          <p className="mb-6">
            The Congress party's core ideology—secularism, inclusive growth, and standing with the marginalized—resonates deeply with the very fabric of Moradabad. We are a city of diverse cultures living in harmony, and our politics must reflect that unity, not divide us.
          </p>
          
          <p>
            As we approach the 2027 UP Legislative Assembly elections, my resolve is stronger than ever. The INDIA Alliance represents the collective will of the people against authoritarianism and economic mismanagement. I ask for your support not just to win an election, but to partner with you in writing a new, prosperous chapter for Moradabad.
          </p>
        </div>
      </div>
    </section>
  );
}
