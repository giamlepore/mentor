'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="MentorConnect logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xl font-bold">MentorConnect</span>
        </div>
        <Button variant="ghost" className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Menu</span>
        </Button>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 px-4 bg-white text-black">
          <div className="space-x-4 mb-8">
            <Button variant="ghost" className="text-gray-600">Mentee</Button>
            <Button variant="ghost" className="text-blue-600 border-b-2 border-blue-600">Mentor</Button>
          </div>
          <h1 className="text-4xl font-bold mb-4 max-w-2xl mx-auto">Your next chapter, made possible by mentoring</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Build confidence as a leader, grow your network, and define your legacy.
          </p>
          <Button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg">
            Become a Mentor
          </Button>
        </section>

        <section className="text-center py-10 bg-white">
          <p className="text-gray-600 mb-8">Proven success with 20,000+ top organizations</p>
          <div className="flex justify-center space-x-8">
            {['Calendly', 'Atlassian', 'Discord', 'Webflow'].map((company) => (
              <div key={company} className="text-gray-400 font-semibold">{company}</div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-white text-black">
          <h2 className="text-3xl font-bold text-center mb-8">Transforming your potential</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
  Become the best version of yourself by accessing to the perspectives and life experiences of others who&apos;ve been there, done that.
</p>
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="MentorConnect platform interface"
              width={800}
              height={400}
              className="w-full"
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-white text-black">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "An open access to the world's best.",
                description: "From Design to AI, there are thousands of mentors you can get access for free.",
                number: "1"
              },
              {
                title: "Personalized advice to accelerate your success.",
                description: "Book 1:1 mentorship session & get advice, insights to move forward with your goals.",
                number: "2"
              },
              {
                title: "Achieve your long term goals, easily.",
                description: "Connect with mentors for recurring sessions and work towards a long-term goal.",
                number: "3"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8 text-black">
            <h2 className="text-3xl font-bold">Discover the world&apos;s top mentors</h2>
              <Button variant="outline" className="text-blue-600 border-blue-600">
                Explore all
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-black">
              {[
                {
                  name: "Vibha Finserve",
                  role: "Senior application developer at Cognizant Technology Solutions",
                  sessions: 124,
                  experience: "8 years",
                  image: "/placeholder.svg?height=100&width=100"
                },
                {
                  name: "Sheikh Izhan",
                  role: "Product Design Lead at Get Licensed",
                  sessions: 178,
                  experience: "7 years",
                  image: "/placeholder.svg?height=100&width=100"
                },
                {
                  name: "Ketki Hardas",
                  role: "Senior UX Designer • Design Ops at ex-Motorola Solutions",
                  sessions: 316,
                  experience: "9 years",
                  image: "/placeholder.svg?height=100&width=100"
                }
              ].map((mentor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                  <p className="text-gray-600 mb-4">{mentor.role}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{mentor.sessions} sessions</span>
                    <span>{mentor.experience} experience</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">A platform that delivers results</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { label: "Happy Members", value: "89%", color: "text-purple-700" },
                { label: "Expert Mentors", value: "200K", color: "text-purple-700" },
                { label: "Countries", value: "150", color: "text-purple-700" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow inline-block">
              <div className="text-4xl font-bold text-purple-700 mb-2">20M+</div>
              <div className="text-gray-600">Connections</div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Loved by our community</h2>
            <div className="flex justify-center space-x-4 mb-8">
              {['Product', 'Engineering', 'Design', 'Marketing', 'Data Science', 'Product Research'].map((category) => (
                <Button key={category} variant="outline" className="text-sm">
                  {category}
                </Button>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-black">
              {[
                {
                  name: "Jocelyn Esquivel",
                  role: "UX Lead at Capped",
                  sessions: 215,
                  image: "/placeholder.svg?height=64&width=64",
                  review: "Great chat with Jocelyn! She helped me rethink about metrics (product, UX/UI, business) when working on a project. I loved that she had articles & resources ready to share. The fact that she showed openness for future conversations is also amazing."
                },
                {
                  name: "Kieran Yi Moon",
                  role: "Product Manager at Meta",
                  sessions: 989,
                  image: "/placeholder.svg?height=64&width=64",
                  review: "Kieran is very knowledgeable, informative and super helpful! Product Manager who has great ideas! Thank you Kieran for your advice, dedication to mentoring aspiring PMs and willingness to share your knowledge & experiences!!"
                },
                {
                  name: "J. Doe",
                  role: "Senior Designer at TechCorp",
                  sessions: 543,
                  image: "/placeholder.svg?height=64&width=64",
                  review: "The conversation with J. was amazing! They blew me out of the water with their insights and advice. J. even helped me with some resume tweaks. I can't wait to chat with them again. You're in good hands!"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.sessions} sessions</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2023 MentorConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}