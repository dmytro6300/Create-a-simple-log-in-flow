import React from 'react';

interface FormActionProps {
    handleSubmit: (event: React.FormEvent) => void;
    type?: 'Button' | 'Hidden'; // Type is now optional and can only be 'Button' or 'Hidden'
    action?: 'submit' | 'reset'; // Action is now optional and can only be 'submit' or 'reset'
    text: string;
}

const FormAction: React.FC<FormActionProps> = ({
    handleSubmit,
    type = 'Button',
    action = 'submit',
    text,
}) => {
    return (
    <>
        {type === 'Button' ? (
        <button
            type={action}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onClick={handleSubmit}
        >
            {text}
        </button>
        ) : (
        <></>
        )}
    </>
    );
};

export default FormAction;
