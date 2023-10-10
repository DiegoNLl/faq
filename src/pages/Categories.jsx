import Card from "../components/Card";
import { data } from "../utils/dataUtil";




const Categories = () => {
  return (
    <section>
      <div>
        <h1>Preguntas Frecuentes</h1>
        <div>
          {data.map(element => {
            return (
              <Card key={element.id} data={element} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;