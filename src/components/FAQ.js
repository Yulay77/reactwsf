import Collapse from "./Collapse";

const data =[
    {question: "Question 1", answer: "Réponse 1"},
    {question: "Question 2", answer: "Réponse 2"},
    {question: "Question 3", answer: "Réponse 3"},
    {question: "Question 1", answer: "Réponse 1"},
];


//export default function FAQ(){
//    const results = [];
//    for (let item of data) {
//        results.push (<Collapse title={item.question} body={item.answer} />);
//
//    }
//    return <div>{results}</div>;
//    
//}

//export default function FAQOptimized() {
//    return (
//        <div>
//            {data.map(function (item) {
//                return <Collapse title={item.question} body={item.answer} />;
//            })}
//        </div>
//    );
//}

export default function FAQOptimized() {
    return (
        <div>
            {data.map ((item) => (
            <Collapse title={item.question} body={item.answer}/>
            ))
        }
        </div>
    )}


