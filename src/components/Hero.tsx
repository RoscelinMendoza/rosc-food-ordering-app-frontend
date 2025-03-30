import heroTacos from "../assets/HeroTacos.jpg";

const Hero = () => {
    return (
<div>
    <img src={heroTacos} className="w-full max-h-[600px] object-cover"/>
</div>
    );
};

export default Hero;