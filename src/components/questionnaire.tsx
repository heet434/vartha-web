import React, { useState } from 'react';
import "../app/questions/questions.css"

type PreparationStage = 'Prelims' | 'Mains' | 'Interviews';
type PreparationDuration = 'Less than 1 year' | '1-2 years' | '3+years';
type CurrentStatus = 'College Student' | 'Full-Time Aspirant' | 'Working Professional';

interface QuestionOption {
  value: string;
  label: string;
}

const Questionnaire = () => {
  const [stage, setStage] = useState<PreparationStage>('Mains');
  const [duration, setDuration] = useState<PreparationDuration>('3+years');
  const [status, setStatus] = useState<CurrentStatus>('Working Professional');

  const stages: QuestionOption[] = [
    { value: 'Prelims', label: 'Prelims' },
    { value: 'Mains', label: 'Mains' },
    { value: 'Interviews', label: 'Interviews' }
  ];

  const durations: QuestionOption[] = [
    { value: 'Less than 1 year', label: 'Less than 1 year' },
    { value: '1-2 years', label: '1-2 years' },
    { value: '3+years', label: '3+years' }
  ];

  const statuses: QuestionOption[] = [
    { value: 'College Student', label: 'College Student' },
    { value: 'Full-Time Aspirant', label: 'Full-Time Aspirant' },
    { value: 'Working Professional', label: 'Working Professional' }
  ];

  return (
    <div className="w-[440px] h-[233px] pt-[20px]">
        <div className="pb-4">
          <h3 className='ask_ques pb-2'>
            Which stage are you currently preparing for?
          </h3>
          <div className="flex gap-2">
            {stages.map((option) => (
              <button
                key={option.value}
                onClick={() => setStage(option.value as PreparationStage)}
                className={`flex-1 px-4 py-3 text-sm rounded-md transition-colors
                  ${stage === option.value 
                    ? 'bg-[#e572834b] text-[#E57283]' 
                    : 'bg-white  border-solid border-2 border-gray-300 text-gray-600 hover:bg-gray-200'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-4">
          <h3 className="ask_ques pb-2">
            How long have you been preparing for UPSC?
          </h3>
          <div className="flex gap-2">
            {durations.map((option) => (
              <button
                key={option.value}
                onClick={() => setDuration(option.value as PreparationDuration)}
                className={`flex-1 px-4 py-2 text-sm rounded-md transition-colors
                  ${duration === option.value 
                    ? 'bg-[#e572834b] text-[#E57283]' 
                    : 'bg-white  border-solid border-2 border-gray-300 text-gray-600 hover:bg-gray-200'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-4">
          <h3 className="ask_ques pb-2">
            What best describes your current status?
          </h3>
          <div className="flex gap-2">
            {statuses.map((option) => (
              <button
                key={option.value}
                onClick={() => setStatus(option.value as CurrentStatus)}
                className={`flex-1 px-4 w-[170px] py-2 text-sm rounded-md transition-colors
                  ${status === option.value 
                    ? 'bg-[#e572834b] text-[#E57283]' 
                    : 'bg-white  border-solid border-2 border-gray-300 text-gray-600 hover:bg-gray-200'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Questionnaire;