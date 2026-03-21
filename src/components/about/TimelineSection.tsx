import { SectionHeader } from "../ui/SectionHeader";

const MILESTONES = [
  {
    year: "1990s",
    title: "Early Activism",
    description: "Began political journey participating in student politics and local advocacy for civic amenities in Moradabad."
  },
  {
    year: "2010s",
    title: "INC District President",
    description: "Appointed as the District President of the Indian National Congress for Moradabad, leading organizational restructuring."
  },
  {
    year: "2022",
    title: "Bharat Jodo Yatra",
    description: "Actively participated in and mobilized support for the UP leg of the historic Bharat Jodo Yatra led by Rahul Gandhi."
  },
  {
    year: "Present",
    title: "2027 UP Elections",
    description: "Preparing the ground as a key INDIA Alliance face in Moradabad, focusing on comprehensive regional development."
  }
];

export function TimelineSection() {
  return (
    <section className="bg-off-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="The Journey So Far" 
          subtitle="Decades of untiring service to the Congress party and the people."
          isDark={false}
          align="center"
        />
        
        <div className="relative mt-16">
          {/* Vertical line connecting timeline items */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2" />

          {MILESTONES.map((item, index) => (
            <div key={item.year} className={`relative flex items-center justify-between mb-12 md:mb-16 w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-white border-4 border-primary-accent shadow-lg flex items-center justify-center -translate-x-0 md:-translate-x-1/2 z-10">
                <span className="font-bold text-primary font-display text-sm">{item.year}</span>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <div className={`w-[calc(100%-80px)] md:w-[45%] ml-20 md:ml-0 bg-white p-6 rounded-xl shadow-lg border border-slate-100 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <h3 className="font-display font-bold text-xl text-primary mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
