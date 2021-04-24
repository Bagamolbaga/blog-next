import ContentAside from "../ContentAside/ContentAside";
import ContentSection from "../ContentSection/ContentSection";

export default function Content() {
    return (
      <div className="content">
        <div className="main-conteiner">
          <div className="content__row">
            <ContentSection />
            <ContentAside />
          </div>
        </div>
      </div>
    );
  }