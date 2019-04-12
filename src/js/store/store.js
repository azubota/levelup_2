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
					quizoption1: "rod",
					quizoption2: "heart",
					quizoption3: "mat",
					hint: "",
					video: "https://www.youtube.com/embed/_KUiov8_uEo",
					image:
						"https://ucarecdn.com/ec7a0fa5-c5bc-4df4-94cf-d9508c2b191e/levelupA.png",
					next: "/lesson/2"
				},
				{
					id: 2,
					kind: "Reading Lesson",
					title: "Short e vowel",
					content:
						"In this lesson you will learn about the short e vowel.",
					question: "Which word has the short e vowel?",
					quizoption1: "mat",
					quizoption2: "hop",
					quizoption3: "jet",
					quizImage: "url",
					hint: "",
					video: "https://www.youtube.com/embed/ONEyC-S1x-U",
					image:
						"https://ucarecdn.com/1c135712-aadf-45cf-bcbe-82454e6c8312/levelupE.png",
					next: "/lesson/3"
				},
				{
					id: 3,
					kind: "Math Lesson",
					title: "Adding tens and ones",
					content:
						"In this lesson you will learn about adding ten and ones.",
					question: "What is the sum? 35 + 4 =",
					quizoption1: "37",
					quizoption2: "40",
					quizoption3: "39",
					hint: "",
					video: "https://www.youtube.com/watch?v=033pEpEnr_U",
					image:
						"https://ucarecdn.com/a410154f-7731-41ed-ae5d-7370bb40ce17/levelup101.png",
					next: "/lesson/4"
				},
				{
					id: 4,
					kind: "Math Lesson",
					title: "Adding and substracting within 10",
					content:
						"In this lesson you will learn about adding two numbers to find the sum and substracting two numbers to find the diference",
					question: "What is the sum? 6 + 3 =",
					quizoption1: "7",
					quizoption2: "5",
					quizoption3: "9",
					hint: "",
					video: "https://www.youtube.com/watch?v=033pEpEnr_U",
					image:
						"https://ucarecdn.com/3355488a-0e71-4e2b-99f5-d20a44b8bcaf/levelupwithin10.png",
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
