
export default function Home() {
  useEffect(() => {
		const updateDocumentHeight = () => {
			const doc = document.documentElement;
			doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
		};

		// Set the height initially and on window resize
		window.addEventListener("resize", updateDocumentHeight);
		updateDocumentHeight();

		// Clean up the event listener when the component unmounts
		return () => window.removeEventListener("resize", updateDocumentHeight);
	}, []);
  return (
    <div>
      This is content
    </div>
  )
}

