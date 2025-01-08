import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComp({
  questions,
}: {
  questions: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <Accordion type="single" collapsible>
      {questions.map((question, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-start">
            {question.question}
          </AccordionTrigger>
          <AccordionContent>{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
