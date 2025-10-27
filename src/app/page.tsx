"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Sparkles, TrendingUp, Star, Award, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Jamies"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Your Perfect Style"
          description="Premium quality clothing that combines comfort, style, and affordability. Shop the latest fashion trends and timeless classics."
          tag="New Collection"
          tagIcon={Sparkles}
          imageSrc="https://images.pexels.com/photos/5490969/pexels-photo-5490969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fashion clothing collection display"
          buttons={[
            {
              text: "Shop Collection",
              href: "products"
            },
            {
              text: "View Lookbook",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Explore our handpicked selection of trending fashion pieces"
          tag="Bestsellers"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              name: "Elegant Summer Dress",
              price: "$89",
              imageSrc: "https://images.pexels.com/photos/3683586/pexels-photo-3683586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Stylish women summer dress"
            },
            {
              id: "2",
              name: "Classic Cotton Shirt",
              price: "$45",
              imageSrc: "https://images.pexels.com/photos/6787007/pexels-photo-6787007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Men casual cotton shirt"
            },
            {
              id: "3",
              name: "Designer Leather Jacket",
              price: "$199",
              imageSrc: "https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium leather jacket"
            },
            {
              id: "4",
              name: "Premium Denim Jeans",
              price: "$75",
              imageSrc: "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "High-quality denim jeans"
            }
          ]}
          buttons={[
            {
              text: "View All Products",
              href: "https://jamies-store.com/products"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from fashion lovers who trust Jamies"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Fashion Enthusiast",
              testimonial: "The quality is exceptional and the styles are always on-trend. Jamies has become my go-to for both casual and formal wear.",
              imageSrc: "https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Professional",
              testimonial: "Great fit, premium materials, and excellent customer service. I've ordered multiple times and never been disappointed.",
              imageSrc: "https://images.pexels.com/photos/5935405/pexels-photo-5935405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Style Blogger",
              testimonial: "Jamies understands modern fashion. Their pieces are versatile, well-made, and perfect for creating unique looks.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Creative Director",
              testimonial: "The attention to detail and quality craftsmanship is impressive. These clothes feel as good as they look.",
              imageSrc: "https://images.pexels.com/photos/4691221/pexels-photo-4691221.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Fashion Leaders"
          description="Join thousands of satisfied customers who choose quality and style"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/812875/pexels-photo-812875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/812875/pexels-photo-812875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about shopping with Jamies"
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day return policy for all items in original condition with tags attached. Returns are free for orders over $75."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee."
            },
            {
              id: "3",
              title: "Do you offer international shipping?",
              content: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location."
            },
            {
              id: "4",
              title: "How do I find my size?",
              content: "Check our detailed size guide on each product page. If you're between sizes, we recommend sizing up for a comfortable fit."
            },
            {
              id: "5",
              title: "Are your materials sustainable?",
              content: "We're committed to sustainability and use eco-friendly materials whenever possible, including organic cotton and recycled fabrics."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about our products or need styling advice? We're here to help you find your perfect look."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help you...",
            rows: 4,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Jamies"
          columns={[
            {
              items: [
                {
                  label: "Women's Collection",
                  href: "womens"
                },
                {
                  label: "Men's Collection",
                  href: "mens"
                },
                {
                  label: "Accessories",
                  href: "accessories"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Size Guide",
                  href: "size-guide"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                }
              ]
            },
            {
              items: [
                {
                  label: "Customer Service",
                  href: "support"
                },
                {
                  label: "Returns & Exchanges",
                  href: "returns"
                },
                {
                  label: "Track Your Order",
                  href: "tracking"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}