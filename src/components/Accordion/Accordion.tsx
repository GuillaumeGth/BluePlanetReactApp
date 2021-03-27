import React, { FunctionComponent } from "react";
import { AccordionContainer, AccordionControl } from "./style";
import AccordionItem from "./AccordionItem";
type Props = {
  visible?: boolean
}
type AccordionItemProps = {
  alt?: string,
  src: string,
  fish: string,
  logoAlt?: string,
  logoSrc?: string
}
const Accordion : FunctionComponent<Props>= ({visible}) => {
  const accordionItems = [
    {
      src: "turtle",
      alt: "Turtle",
      fish: "greenTurtle",
    },
    {
      src: "acc-ray",
      alt: "Ray",
      fish: "rays",
    },
    {
      src: "acc-shark",
      alt: "Shark",
      fish: "sharksWTBT",
    },
    {
      src: "triggerfish",
      alt: "Triggerfish",
      fish: "redToothTriggerfish",
    },
    {
      src: "acc-hammerhead",
      alt: "Hammerhead Shark",
      fish: "hammerheadShark",
    },
    { src: "octopus", alt: "Octopus", fish: "coconutOctopus" },
    { src: "frogfish", alt: "Frogfish", fish: "frogfish" },
    { src: "barracuda", alt: "Barracuda", fish: "barracuda" },
  ];
  if (visible) return <></>;
  return (
    <AccordionContainer>
      <AccordionControl>
        {accordionItems.map((e: AccordionItemProps) => {
          return (
            <AccordionItem
              key={`acc-item-${e.fish}`}
              src={e.src}
              alt={e.alt}
              logoSrc={e.logoSrc}
              logoAlt={e.logoAlt}
              fish={e.fish}              
            />
          );
        })}
      </AccordionControl>
    </AccordionContainer>
  );
};

export default Accordion;
