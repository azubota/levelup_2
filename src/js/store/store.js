const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lessons: [
				{
					id: "1",
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
					video: "",
					image:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66y8AxQ59TGZxJAsZHBKTaSLI1aWOw_T7gdSwA-chTSUWztpYLg"
				},
				{
					id: "1",
					kind: "Reading Lesson",
					title: "Short e vowel",
					content:
						"In this lesson you will learn about the short e vowel.",
					question: "Which word has the short e vowel?",
					secondquestion:
						"Click on the word that does NOT have the short e vowel.",
					answer: "mat",
					secondanswer: "rod",
					quizOptions: "rod,mat, heart",
					quizImage: "url",
					hint: "",
					video: "",
					image: "https://i.ytimg.com/vi/AXcpYuhtPz8/hqdefault.jpg"
				}
			]
		},
		actions: {
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
