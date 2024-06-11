"use client";

import { useSearchParams } from 'next/navigation';
import { VocabularyFlashCard } from "./vocabularyFlashCard";
import { TranslateLearn } from "./translateLearn";
import { MultiChoiceLearn } from "./multichoiceLearn";
import { ListenSpell } from "./listenSpell";
import { ListenLearn } from "./listenLearn";
import { GrammarInput } from './grammarInput';
import { GrammarChoice } from './grammarChoice';
import { FindPairLearn } from './findPairLearn';

const DefaultComponent = () => <div>Type not recognized</div>;
DefaultComponent.displayName = 'DefaultComponent';

export default function BodyMaterial({ params }: { params: { course: string, unit: string, container: string, lesson: string } }) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('TAG');
  let Component;

  switch (tag) {
    case 'FLASH_CARD':
      Component = VocabularyFlashCard;
      break;
    case 'Multiple_Choice':
      Component = MultiChoiceLearn;
      break;
    case 'FIND_PAIR':
      Component = FindPairLearn;
      break;
    // Add other cases here for other components
    case 'TranslateLearn':
      Component = TranslateLearn;
      break;
    case 'ListenSpell':
      Component = ListenSpell;
      break;
    case 'ListenLearn':
      Component = ListenLearn;
      break;
    case 'GrammarInput':
      Component = GrammarInput;
      break;
    case 'GrammarChoice':
      Component = GrammarChoice;
      break;
    default:
      Component = DefaultComponent;
      break;
  }

  return <Component params={params} />;
}
