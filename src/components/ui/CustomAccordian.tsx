import React from "react";
import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

interface AccordionProps {
  title: string;
  content: string;
  isMaterial?: boolean;
}

const CustomAccordion: React.FC<AccordionProps> = ({
  title,
  content,
  isMaterial = false,
}) => (
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {title}
            </Box>
            {isMaterial ? (
              isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )
            ) : (
              <AccordionIcon />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{content}</AccordionPanel>
      </>
    )}
  </AccordionItem>
);

export default CustomAccordion;
