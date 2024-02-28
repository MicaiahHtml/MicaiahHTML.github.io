import Editor from '@monaco-editor/react';

export default function HomeGraphic(){
    const code = 
    `micaiahVinson = {
    "education": "Expected B.S. Computer Science - WGU",

    "location": "Columbus, OH",

    "interests": ["game hackathons", "liberal arts", "cats"],
    
    "skills": ["full-stack", "OOP", "C++", "Data Engineering", "Linux"]
}`
    return(
        <div className="home-graphic-container">
            {/* <img src = "https://placehold.co/600x400"/> */}
            <Editor
                height="50vh"
                theme="vs-dark"
                defaultLanguage="python"
                defaultValue={code}
                options={{
                    readOnly: true, 
                    domReadOnly: true,
                    fontSize: "20px",
                    scrollBeyondLastLine: false,
                    wordWrap: true
                }}
            />
        </div>
    )
}