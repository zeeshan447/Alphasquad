module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black_1: "#18181B",
      cyan: "#CFFAFE",
      cyan_dark: "#0E7490",
      black_dark: "#27272A",
      blue_dark: "#11648E",
      white: "#FFFFFF",
      gray: "#52525B",
      light_gray: "#52525B",
      dark_black: "#1F2937",
      gray_blend: "#F4F4F5",
      light_blue: "#E5E5E5",
      light_black: "#D4D4D8",
      cream: "#F4F4F5",
      blue_light: "#06B6D4",
      cyan_background: "#a5f3fc",
    },
    fontSize: {
      large: ["96px", "115px"],
      feature: ["60px", "60px"],
      feature_title: ["24px", "32px"],
      feature_description: ["18px", "28px"],
      howitworks_title: ["60px", "60x"],
      howitworks_signup: ["48px", "55px"],
      howitworks_desc: ["20px", "28px"],
      message_name: ["18px", "28px"],
      messsage_title: ["14px", "24px"],
      message_desc: ["18px", "32px"],
      brands_title: ["60px", "69px"],
      numbers_title: ["60px", "60px"],
      numbers_desc: ["18px", "18px"],
      number_card: ["48px", "48px"],
      number_carddesc: ["18px", "18px"],
      nextbigthing_title: ["48px", "62px"],
      pricing_desc: ["20px", "25px"],
      pricing_button: ["12px", "12px"],
      faq_question: ["24px", "24px"],
      faq_answer: ["16px", "24px"],
      filter_text: ["16px", "16px"],
      case_study_location: ["14px", "14px"],
      case_study_title: ["28px, 28px"],
      case_study_desc: ["16px", "24px"],
      case_studydetail_title: ["36px", "36px"],
      footer_title: ["20px", "30px"],
      footer_list: ["16px", "26px"],
      pricing: ["28px", "38px"],
    },
    borderRadius: {
      large: "16px",
    },
    height: {
      height_600: "600px",
    },
    width: {
      width_500: "500px",
    },
    fontFamily: {
      Mullish: ["Mullish"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
