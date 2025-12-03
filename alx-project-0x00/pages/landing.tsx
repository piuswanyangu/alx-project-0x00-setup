import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <Button className="rounded-sm rounded-md rounded-full" title={"Home"} styles={"rounded-sm"}/>
        </div>
    )
}
export default Landing;