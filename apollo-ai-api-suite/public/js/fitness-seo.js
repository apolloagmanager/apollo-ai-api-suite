// Generate dynamic fitness content for SEO pages
const fitnessVariants = [
  {
    title: "AI-Powered Workout Planner",
    intro: "Get personalized workout plans tailored to your unique fitness goals and equipment access.",
    benefits: [
      "Custom routines based on your fitness level",
      "Adaptive plans that evolve with your progress",
      "Minimizes injury risk with proper form guidance",
      "Equipment-free options for home workouts"
    ],
    cta: "Start Your Personalized Fitness Journey"
  },
  {
    title: "Smart Nutrition Assistant",
    intro: "AI-generated meal plans that align with your fitness goals and dietary preferences.",
    benefits: [
      "Calorie and macro tracking made simple",
      "Personalized recipes based on your pantry",
      "Grocery lists optimized for your nutrition goals",
      "Diet adjustments based on workout feedback"
    ],
    cta: "Get Your Nutrition Plan"
  },
  {
    title: "Virtual Fitness Coach",
    intro: "24/7 AI-powered coaching that adapts to your schedule and provides real-time feedback.",
    benefits: [
      "Form correction through video analysis",
      "Progress tracking and milestone celebrations",
      "Motivational prompts and accountability",
      "Recovery recommendations based on data"
    ],
    cta: "Start Your Coaching Session"
  }
];

// Select a random variant
const variant = fitnessVariants[Math.floor(Math.random() * fitnessVariants.length)];

document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("ai-content");
  
  // Create title
  const title = document.createElement("h2");
  title.textContent = variant.title;
  contentContainer.appendChild(title);
  
  // Create introduction
  const intro = document.createElement("p");
  intro.textContent = variant.intro;
  intro.className = "intro";
  contentContainer.appendChild(intro);
  
  // Create benefits list
  const benefitsHeader = document.createElement("h3");
  benefitsHeader.textContent = "Key Benefits:";
  contentContainer.appendChild(benefitsHeader);
  
  const benefitsList = document.createElement("ul");
  variant.benefits.forEach(benefit => {
    const li = document.createElement("li");
    li.textContent = benefit;
    benefitsList.appendChild(li);
  });
  contentContainer.appendChild(benefitsList);
  
  // Update CTA button text
  const ctaBtn = document.querySelector(".btn");
  if (ctaBtn) {
    ctaBtn.textContent = variant.cta;
  }
});