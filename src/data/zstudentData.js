/**
 * Static data for Community Service section
 * Moved from studentData.js as per user request
 */
export const COMMUNITY_SERVICE_DATA = {
  // Service Opportunities (LB - List to Detail)
  opportunities: {
    overview: {
      totalOpportunities: 8,
      enrolledPrograms: 2,
      hoursCompleted: 24,
      hoursRequired: 40,
    },
    categories: [
      "Environmental",
      "Education",
      "Health",
      "Animal Welfare",
      "Community Development",
    ],
    availableOpportunities: [
      {
        id: 1,
        title: "Tree Plantation Drive",
        category: "Environmental",
        organization: "Green Earth Foundation",
        description:
          "Join our weekend tree plantation initiative to create greener neighborhoods. Plant saplings, learn about local flora, and contribute to environmental conservation.",
        location: "City Park, Sector 12",
        date: "2026-02-15",
        duration: "4 hours",
        volunteersNeeded: 20,
        volunteersEnrolled: 12,
        difficulty: "Beginner",
        skillsRequired: ["Teamwork", "Physical Activity"],
        creditHours: 4,
        coordinator: "Mr. Rajesh Verma",
        contactEmail: "rajesh@greenearthfoundation.org",
        status: "available",
        featured: true,
      },
      {
        id: 2,
        title: "Teach Basic Computer Skills",
        category: "Education",
        organization: "Digital Literacy Initiative",
        description:
          "Help underprivileged children learn basic computer skills. Teach typing, internet basics, and educational software.",
        location: "Community Center, Phase 3",
        date: "2026-02-20",
        duration: "6 hours (2 hours x 3 sessions)",
        volunteersNeeded: 10,
        volunteersEnrolled: 7,
        difficulty: "Intermediate",
        skillsRequired: ["Teaching", "Computer Knowledge", "Patience"],
        creditHours: 6,
        coordinator: "Ms. Priya Sharma",
        contactEmail: "priya@digitalliteracy.org",
        status: "available",
        featured: true,
      },
      {
        id: 3,
        title: "Food Distribution Program",
        category: "Community Development",
        organization: "Helping Hands NGO",
        description:
          "Distribute meals and groceries to homeless shelters and low-income families every weekend.",
        location: "Multiple locations across city",
        date: "2026-02-22",
        duration: "5 hours",
        volunteersNeeded: 15,
        volunteersEnrolled: 15,
        difficulty: "Beginner",
        skillsRequired: ["Empathy", "Physical Stamina", "Communication"],
        creditHours: 5,
        coordinator: "Mr. Anil Kumar",
        contactEmail: "anil@helpinghands.org",
        status: "full",
        featured: false,
      },
      {
        id: 4,
        title: "Animal Shelter Support",
        category: "Animal Welfare",
        organization: "Paws & Care Society",
        description:
          "Help care for rescued animals, clean shelters, prepare food, and provide companionship to abandoned pets.",
        location: "Animal Shelter, Outer Ring Road",
        date: "2026-02-25",
        duration: "4 hours",
        volunteersNeeded: 8,
        volunteersEnrolled: 5,
        difficulty: "Beginner",
        skillsRequired: ["Animal Care", "Responsibility", "Compassion"],
        creditHours: 4,
        coordinator: "Dr. Meera Chopra",
        contactEmail: "meera@pawsandcare.org",
        status: "available",
        featured: false,
      },
      {
        id: 5,
        title: "Health Awareness Campaign",
        category: "Health",
        organization: "Public Health Foundation",
        description:
          "Run health awareness campaigns in rural areas covering hygiene, nutrition, and preventive healthcare.",
        location: "Rural Villages (Transport provided)",
        date: "2026-03-05",
        duration: "8 hours (full day)",
        volunteersNeeded: 12,
        volunteersEnrolled: 8,
        difficulty: "Advanced",
        skillsRequired: [
          "Public Speaking",
          "Health Knowledge",
          "Cultural Sensitivity",
        ],
        creditHours: 8,
        coordinator: "Dr. Suresh Rao",
        contactEmail: "suresh@publichealthfoundation.org",
        status: "available",
        featured: true,
      },
      {
        id: 6,
        title: "Beach Cleanup Drive",
        category: "Environmental",
        organization: "Coastal Care Collective",
        description:
          "Clean up plastic waste and debris from beaches, educate beachgoers about marine conservation.",
        location: "Coastal Beach Area",
        date: "2026-03-10",
        duration: "5 hours",
        volunteersNeeded: 25,
        volunteersEnrolled: 18,
        difficulty: "Beginner",
        skillsRequired: ["Teamwork", "Environmental Awareness"],
        creditHours: 5,
        coordinator: "Ms. Kavya Nair",
        contactEmail: "kavya@coastalcare.org",
        status: "available",
        featured: false,
      },
      {
        id: 7,
        title: "Tutoring Underprivileged Kids",
        category: "Education",
        organization: "Education for All",
        description:
          "Weekly tutoring sessions for underprivileged children in Math, Science, and English.",
        location: "Evening School, Sector 8",
        date: "Ongoing (Every Saturday)",
        duration: "2 hours per week",
        volunteersNeeded: 15,
        volunteersEnrolled: 12,
        difficulty: "Intermediate",
        skillsRequired: ["Teaching", "Subject Knowledge", "Patience"],
        creditHours: 2,
        coordinator: "Mr. Vikram Singh",
        contactEmail: "vikram@educationforall.org",
        status: "available",
        featured: true,
      },
      {
        id: 8,
        title: "Senior Citizen Care",
        category: "Community Development",
        organization: "Golden Years Foundation",
        description:
          "Spend time with elderly residents at old age homes, organize activities, provide companionship.",
        location: "Senior Living Home, Sector 15",
        date: "2026-02-28",
        duration: "3 hours",
        volunteersNeeded: 10,
        volunteersEnrolled: 9,
        difficulty: "Beginner",
        skillsRequired: ["Empathy", "Communication", "Patience"],
        creditHours: 3,
        coordinator: "Mrs. Lakshmi Iyer",
        contactEmail: "lakshmi@goldenyears.org",
        status: "available",
        featured: false,
      },
    ],
  },

  // Service Reflection (LD - Content Studio with AI4 Coach)
  reflections: {
    overview: {
      totalReflections: 3,
      averageScore: 8.5,
      lastReflection: "2026-01-28",
    },
    entries: [
      {
        id: 1,
        serviceActivity: "Tree Plantation Drive",
        date: "2026-01-28",
        hoursServed: 4,
        location: "City Park, Sector 12",
        organization: "Green Earth Foundation",
        reflectionTitle: "Making a Difference, One Tree at a Time",
        reflectionContent:
          "Today's tree plantation drive was an eye-opening experience. I planted 15 saplings alongside my peers and learned about the importance of urban forestry. The organization taught us proper planting techniques and how to care for young trees. What struck me most was how simple actions can have a lasting environmental impact. I realized that environmental conservation isn't just about big policy changes but also individual contributions. Working as a team made the experience more meaningful, and I felt a genuine sense of accomplishment seeing rows of newly planted trees.",
        learningOutcomes: [
          "Environmental stewardship and conservation techniques",
          "Teamwork and collaborative problem-solving",
          "Understanding of local flora and ecosystem balance",
        ],
        skillsDeveloped: [
          "Leadership",
          "Environmental Awareness",
          "Physical Endurance",
        ],
        challenges:
          "Initial difficulty in digging through hard soil, coordination with large group",
        futureGoals:
          "Join the monthly maintenance team, organize a school-wide plantation drive",
        aiCoachFeedback: {
          strengths:
            "Excellent reflection on personal growth and community impact. You've shown strong awareness of environmental issues.",
          suggestions:
            "Consider exploring how this experience connects to broader sustainability goals. What specific follow-up actions can you take?",
          nextSteps:
            "Research urban forestry programs in your city. Consider creating a presentation for your school about the importance of tree plantation.",
          emotionalIntelligence:
            "Your reflection demonstrates empathy for environmental causes and recognition of collective responsibility.",
          score: 9,
        },
        status: "reviewed",
        photos: [],
      },
      {
        id: 2,
        serviceActivity: "Tutoring Underprivileged Kids",
        date: "2026-01-20",
        hoursServed: 8,
        location: "Evening School, Sector 8",
        organization: "Education for All",
        reflectionTitle: "Teaching Beyond the Classroom",
        reflectionContent:
          "Over the past month, I've been tutoring underprivileged children in Math and Science every Saturday. The experience has been humbling and rewarding. These children are eager to learn despite facing numerous challenges like lack of resources and difficult home environments. I learned to adapt my teaching methods to different learning styles and pace. One student, Rahul, struggled with fractions initially but after using real-life examples like sharing pizzas, he grasped the concept. This taught me that education isn't one-size-fits-all. I also realized how privileged I am to have access to quality education.",
        learningOutcomes: [
          "Adaptive teaching methodologies",
          "Empathy and understanding of socio-economic challenges",
          "Patience and effective communication skills",
        ],
        skillsDeveloped: [
          "Teaching",
          "Empathy",
          "Problem-Solving",
          "Communication",
        ],
        challenges:
          "Language barriers, maintaining attention with limited resources",
        futureGoals:
          "Continue weekly tutoring, develop creative teaching materials, involve more students from my school",
        aiCoachFeedback: {
          strengths:
            "Beautiful reflection showing growth in empathy and teaching skills. Your example with Rahul demonstrates practical problem-solving.",
          suggestions:
            "Reflect deeper on systemic issues of educational inequality. How can you advocate for change beyond individual tutoring?",
          nextSteps:
            "Document creative teaching methods you develop. Consider creating a handbook for other student tutors. Explore educational policy and advocacy.",
          emotionalIntelligence:
            "Strong awareness of privilege and social responsibility. You're developing crucial life skills through service.",
          score: 8.5,
        },
        status: "reviewed",
        photos: [],
      },
      {
        id: 3,
        serviceActivity: "Food Distribution Program",
        date: "2025-12-18",
        hoursServed: 5,
        location: "City Shelter, Downtown",
        organization: "Helping Hands NGO",
        reflectionTitle: "Eyes Opened to Reality",
        reflectionContent:
          "Distributing food to homeless individuals and families was a deeply moving experience. I saw firsthand the harsh realities many people face - families with children living on streets, elderly people with no support system. While handing out meals, I had brief conversations with several people and heard their stories. Many had lost jobs, some faced health issues, others were displaced. It made me realize how fragile our security can be. The gratitude in their eyes for a simple meal was humbling. This experience reinforced my belief in giving back to society and made me more aware of social inequalities.",
        learningOutcomes: [
          "Understanding of homelessness and poverty",
          "Social awareness and empathy",
          "Importance of community support systems",
        ],
        skillsDeveloped: ["Empathy", "Social Awareness", "Communication"],
        challenges:
          "Emotional impact of seeing poverty up close, feeling helpless about systemic issues",
        futureGoals:
          "Organize regular donation drives at school, volunteer more frequently, learn about policies addressing homelessness",
        aiCoachFeedback: {
          strengths:
            "Your emotional honesty and social awareness are commendable. The reflection shows genuine engagement with complex social issues.",
          suggestions:
            "Channel your emotional response into sustained action. Research root causes of homelessness. How can students advocate for policy changes?",
          nextSteps:
            "Connect with local advocacy groups. Consider starting a school club focused on social justice. Learn about affordable housing initiatives.",
          emotionalIntelligence:
            "You're processing difficult emotions constructively. Continue to balance empathy with action-oriented thinking.",
          score: 8,
        },
        status: "reviewed",
        photos: [],
      },
    ],
    draftReflections: [
      {
        id: 4,
        serviceActivity: "Animal Shelter Support",
        date: "2026-02-01",
        hoursServed: 4,
        status: "draft",
      },
    ],
  },
};
