const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lessonShow: false,
			lessons: [
				{
					id: 1,
					kind: "Reading Lesson",
					title: "Short a vowel",
					content:
						"In this lesson you will learn about the short a vowel.",
					question: "Which word has the short a vowel?",
					secondquestion:
						"Click on the word that does NOT have the short a vowel.",
					answer: "mat",
					secondanswer: "rod",
					quizoption1: "rod",
					quizoption2: "mat",
					quizoption3: "heart",
					hint: "",
					video: "https://www.youtube.com/embed/_KUiov8_uEo",
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66y8AxQ59TGZxJAsZHBKTaSLI1aWOw_T7gdSwA-chTSUWztpYLg",
					next: "/lesson/2"
				},
				{
					id: 2,
					kind: "Reading Lesson",
					title: "Short e vowel",
					content:
						"In this lesson you will learn about the short e vowel.",
					question: "Which word has the short e vowel?",
					secondquestion:
						"Click on the word that does NOT have the short e vowel.",
					answer: "mat",
					secondanswer: "rod",
					quizoption1: "rod",
					quizoption2: "mat",
					quizoption3: "heart",
					quizImage: "url",
					hint: "",
					video: "https://www.youtube.com/embed/ONEyC-S1x-U",
					image:
						"https://ecdn.teacherspayteachers.com/thumbitem/Short-Vowel-Posters-Freebie-2006887-1459800768/original-2006887-3.jpg",
					next: "/lesson/3"
				},
				{
					id: 3,
					kind: "Math Lesson",
					title: "Adding tens and ones",
					content:
						"In this lesson you will learn about adding ten and ones.",
					question: "What is the sum? 35 + 4 =",
					secondquestion:
						"Maggie has 23 dolls. Her sister, Shay has 7 dolls. How many dolls do they have altogether? ",
					answer: "39",
					secondanswer: "30",
					quizoption1: "37",
					quizoption2: "39",
					quizoption3: "40",
					hint: "",
					video: "",
					image: "https://i.ytimg.com/vi/AXcpYuhtPz8/hqdefault.jpg",
					next: "/lesson/4"
				},
				{
					id: 4,
					kind: "Math Lesson",
					title: "Adding tens and ones",
					content:
						"In this lesson you will learn about adding ten and ones.",
					question: "What is the sum? 35 + 4 =",
					secondquestion:
						"Maggie has 23 dolls. Her sister, Shay has 7 dolls. How many dolls do they have altogether? ",
					answer: "39",
					secondanswer: "30",
					quizoption1: "37",
					quizoption2: "39",
					quizoption3: "40",
					hint: "",
					video: "",
					image:
						"http://proprofs-cdn.s3.amazonaws.com/images/QM/user_images/1826446/1511347853.jpg",
					next: "/lesson/5"
				}
			]
		},
		actions: {
			showLesson: e => {
				setStore({ lessonShow: true });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
