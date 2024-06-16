export default function About() {
    return (
        <div id="about" className="my-20 flex min-h-96 justify-center">
            <div className="flex flex-col justify-center items-center w-[40%] px-10">
                <p className="mb-2 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="flex justify-center items-center w-[40%]">
                <h3 className="text-4xl font-sans font-medium text-center text-amber-700">Abo<span className="underline">ut</span> me</h3>
            </div>
        </div>
    );
}