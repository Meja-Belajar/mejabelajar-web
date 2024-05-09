/* 
  Credit for the images goes to the respective owners.
  - https://unsplash.com/
  - https://www.flaticon.com/stickers-pack/creativity-11
  - https://www.flaticon.com/free-stickers/education
  - https://www.flaticon.com/free-stickers/teacher

  Disclaimer: 
  - The images are used to provide a better visual experience.
  - The name, descriptions, and status of the people in the images are fictional.
*/

// guest User
export const Header = {
  "title": "Discover Your Perfect <br /> Mentor Today!",
  "desc": "Meja Belajar now is your gateway to <br /> connecting with experienced mentors who <br /> are eager to share their knowledge and <br /> expertise with you."
}

export const NavigationLists = [
  {
    name: "mentor",
    link: "/mentor",
  },
  {
    name: "forum",
    link: "/forum",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "login",
    link: "/login",
  },
];

export const Information = {
  title: "Enhanced Academic Performance",
  desc: "Meja Belajar assists university students in enhancing their academic performance with the aid of our mentors. Whenever you're ready, our mentors are always prepared to provide assistance.",
  image:
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const OurProgram = {
  title: "Our Program",
  desc: "Whether you're a student, professional, or entrepreneur",
  feature: [
    {
      title: "Mentorship",
      desc: "Our mentors are always ready to provide assistance whenever you're ready.",
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359754.png",
    },
    {
      title: "Workshop",
      desc: "We provide workshops to help you improve your skills and knowledge.",
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359772.png",
    },
    {
      title: "Consultation",
      desc: "We provide consultation services to help you solve your problems.",
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359784.png",
    },
  ],
};

export const Reviews = {
  "title": "View some reviews <br /> from <a className='special-font'>Meja Belajar'</a> users",
  "reviews": [
    {
      name: "John Ilham",
      status: "Student at BINUS",
      desc: "I've been using Meja Belajar for a year and I'm very satisfied with the service.",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Smith",
      status: "Student at UPH",
      desc: "It's been a great experience using Meja Belajar. I've learned a lot.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Peter Parker",
      status: "Mentor",
      desc: "As a mentor, I'm very satisfied with the platform. Great experience!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg/330px-Tom_Holland_MTV_2018_%2802%29.jpg",
    },
  ]
};

export const BestMentors = {
  title: "Our Best Mentor",
  desc: "Congratulations to our top mentor for the odd semester, whose exceptional performance and dedication have set a new standard for excellence in mentorship.",
  mentors: [
    {
      name: "Tom Holland",
      status: "Mentor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg/330px-Tom_Holland_MTV_2018_%2802%29.jpg",
    },
    {
      name: "Sandra Wong",
      status: "Mentor",
      image:
        "https://images.unsplash.com/photo-1607016255703-32bda23cf7f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dwayne Johnson",
      status: "Mentor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/330px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg",
    },
  ],
};

export const PopularCourses = {
  title: "Our Popular Courses",
  courses: [
    {
      name: "Introduction to Programming",
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359835.png",
    },
    {
      name: "Introduction to Web Development",
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359857.png",
    },
    {
      name: "Human and Reseource Management",
      image: "https://cdn-icons-png.flaticon.com/256/4359/4359881.png",
    },
  ],
};

// auth User
export const CDNIcon = {
  "tutoring": "https://cdn-icons-png.flaticon.com/512/7189/7189988.png",
  "mentoring": "https://cdn-icons-png.flaticon.com/512/4681/4681580.png",
  "for_mentor": "https://cdn-icons-png.flaticon.com/512/9473/9473007.png"
}

export const PopularMentors = [
  {
	  "mentor_id": "1",
	  "username": "John Doe",
	  "university": "University of California, Berkeley",
	  "email": "john@mail.com",
	  "phone": "080-1234-5678",
	  "description": "I am a student at UC Berkeley. I am studying computer science and I am interested in machine learning and artificial intelligence.",
	  "profile_picture": "https://www.w3schools.com/howto/img_avatar.png",
	  "bod": "2021-01-01T00:00:00.000Z",
	  "revenue": 121.2,
	  "rating": 4.5,
	  "total_teaching_hours": 10,
	  "teaching_frequency": 2,
	  "courses": [
	    {
	      "course_id": "1",
	      "name": "Introduction to Machine Learning",
	      "detail": "This course is an introduction to machine learning. It covers the basic concepts of machine learning and its applications.",
	      "rating": "4.5",
	      "hourly_rate": 12.1,
	      "course_start_time": "2021-01-01T00:00:00.000Z",
	      "course_end_time": "2021-01-01T00:00:00.000Z" 
	    },
      {
        "course_id": "2",
        "name": "Introduction to Artificial Intelligence",
        "detail": "This course is an introduction to artificial intelligence. It covers the basic concepts of artificial intelligence and its applications.",
        "rating": "4.5",
        "hourly_rate": 12.1,
        "course_start_time": "2021-01-01T00:00:00.000Z",
        "course_end_time": "2021-01-01T00:00:00.000Z" 
      }
	  ],
	  "reviews": [
	    {
	      "review_id": "1",
	      "description": "John is a great mentor. He is very knowledgeable and helpful. I would recommend him to anyone who is interested in machine learning."
	    }
	  ]
	}
]

export const BookingLists =  [
  {
    "id": "2",
    "user": {
      "id": "2",
      "name": "Mentee"
    },
    "mentor": {
      "id": "2",
      "name": "Jane Doe"
    },
    "course": {
      "id":" 2",
      "name": "Introduction to Design",
      "detail": "Learn the basic of design"
    },
    "invoice": {
      "id": "2",
      "payment_method": "credit_card",
      "payment_name": "John Doe",
      "payment_status": "paid",
      "payment_amount": 1000000,
      "payment_fee": 10000,
      "payment_total": 1010000
    },
    "date": "2024-06-12T00:00:00.000Z",
    "location": "Bina Nusantara University"
  },
  {
    "id": "1",
    "user": {
      "id": "1",
      "name": "Mentee"
    },
    "mentor": {
      "id": "1",
      "name": "John Doe"
    },
    "course": {
      "id": "1",
      "name": "Introduction to Programming",
      "detail": "Learn the basic of programming"
    },
    "invoice": {
      "id": "1",
      "payment_method": "credit_card",
      "payment_name": "John Doe",
      "payment_status": "paid",
      "payment_amount": 1000000,
      "payment_fee": 10000,
      "payment_total": 1010000
    },
    "date": "2024-04-12T00:00:00.000Z",
    "location": "Bina Nusantara University"
  },
]

