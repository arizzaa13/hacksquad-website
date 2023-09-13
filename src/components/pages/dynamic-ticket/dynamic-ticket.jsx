'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const colorVariants = [
  {
    id: 1,
    title: 'Color variant 1',
    buttonColorClass: 'before:bg-color-picker-variant-1',
  },
  {
    id: 2,
    title: 'Color variant 2',
    buttonColorClass: 'before:bg-color-picker-variant-2',
  },
  {
    id: 3,
    title: 'Color variant 3',
    buttonColorClass: 'before:bg-color-picker-variant-3',
  },
  {
    id: 4,
    title: 'Color variant 4',
    buttonColorClass: 'before:bg-color-picker-variant-4',
  },
  {
    id: 5,
    title: 'Color variant 5',
    buttonColorClass: 'before:bg-color-picker-variant-5',
  },
  {
    id: 6,
    title: 'Color variant 6',
    buttonColorClass: 'before:bg-color-picker-variant-6',
  },
];

const DynamicTicket = () => {
  const [selectedColorSchema, setSelectedColorSchema] = useState('1');
  const withColorPicker = true;

  const handleColorClick = (e) => {
    setSelectedColorSchema(e.target.id);
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center overflow-hidden py-20">
      <div className="container grid grid-cols-12 gap-10 lg:grid-cols-1 lg:gap-0">
        <div className="col-span-6 self-center pr-16 lg:col-span-full lg:pr-0 lg:text-center">
          <h2 className="max-w-3xl font-titles text-60 font-semibold leading-1.125 lg:mx-auto lg:text-42 md:text-36">
            Ron Wasikowski’s Ticket
          </h2>
          <p className="mt-5 max-w-sm text-20 leading-normal text-grey-1 lg:mx-auto md:text-18">
            Join Ron at Hacksquad 2023 and get your exclusive participation ticket!
          </p>
        </div>
        <div className="col-span-6 -ml-9 self-center lg:col-span-full lg:ml-0">
          <div className="lg:mt-10">
            <section
              className={clsx('ticket', {
                'before:bg-[rgba(63,103,192,0.6)] after:bg-[rgba(63,103,192,0.3)]':
                  selectedColorSchema === '1',
                'before:bg-[rgba(119,57,199,0.6)] after:bg-[rgba(94,57,199,0.3)]':
                  selectedColorSchema === '2',
                'before:bg-[rgba(174,139,14,0.6)] after:bg-[rgba(192,94,63,0.3)]':
                  selectedColorSchema === '3',
                'before:bg-[rgba(21,139,139,0.6)] after:bg-[rgba(18,130,126,0.3)]':
                  selectedColorSchema === '4',
                'before:bg-[rgba(192,109,49,0.6)] after:bg-[rgba(0,68,171,0.3)]':
                  selectedColorSchema === '5',
                'before:bg-[rgba(57,105,199,0.6)] after:bg-[rgba(179,57,199,0.3)]':
                  selectedColorSchema === '6',
              })}
            >
              <Image
                className="relative z-20 w-full lg:mx-auto lg:w-auto"
                src={
                  selectedColorSchema === '1'
                    ? '/images/ticket-1.png'
                    : selectedColorSchema === '2'
                    ? '/images/ticket-2.png'
                    : selectedColorSchema === '3'
                    ? '/images/ticket-3.png'
                    : selectedColorSchema === '4'
                    ? '/images/ticket-4.png'
                    : selectedColorSchema === '5'
                    ? '/images/ticket-5.png'
                    : '/images/ticket-6.png'
                }
                width={624}
                height={353}
                alt="Ticket background"
                priority
              />
            </section>

            {withColorPicker && (
              <div className="mt-8 flex items-center gap-6 lg:my-7 lg:justify-center sm:flex-wrap">
                <p className="text-18 leading-none text-grey-1 lg:text-16 sm:w-full sm:text-center">
                  Pick a color:
                </p>
                <div className="flex gap-5 lg:gap-4">
                  {colorVariants.map((item, i) => {
                    const { id, title, buttonColorClass } = item;
                    const isActive = selectedColorSchema === `${id}`;

                    return (
                      <motion.button
                        className={clsx(
                          'relative flex h-9 w-9 items-center justify-center rounded-lg before:h-6 before:w-6 before:shrink-0 before:rounded',
                          buttonColorClass
                        )}
                        key={i}
                        id={`${id}`}
                        disabled={isActive}
                        onClick={handleColorClick}
                      >
                        <span className="sr-only">{title}</span>
                        <motion.span
                          className={clsx(
                            'pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-lg transition-shadow duration-300',
                            {
                              'shadow-[0_0_0_1px_rgba(255,255,255,0.2)]': !isActive,
                            },
                            isActive && {
                              'shadow-[0_0_0_1px_rgba(66,226,254,0.5)]':
                                selectedColorSchema === '1',
                              'shadow-[0_0_0_1px_rgba(214,73,150,0.5)]':
                                selectedColorSchema === '2',
                              'shadow-[0_0_0_1px_rgba(254,237,170,0.5)]':
                                selectedColorSchema === '3',
                              'shadow-[0_0_0_1px_rgba(0,255,255,0.5)]': selectedColorSchema === '4',
                              'shadow-[0_0_0_1px_rgba(255,158,117,0.5)]':
                                selectedColorSchema === '5',
                              'shadow-[0_0_0_1px_rgba(170,254,249,0.5)]':
                                selectedColorSchema === '6',
                            }
                          )}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5 }}
                          aria-hidden
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTicket;
