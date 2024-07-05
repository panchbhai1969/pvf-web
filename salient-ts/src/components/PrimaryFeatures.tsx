'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotUploads from '@/images/screenshots/uploads.jpg'
import screenshotInsights from '@/images/screenshots/insights.jpg'
import screenshotMagic from '@/images/screenshots/magic.jpg'
import screenshotAudit from '@/images/screenshots/audit-report.jpg'

const features = [
  {
    title: 'Upload',
    description:
      "Just ask the client to upload all the documents and relevant evidences",
    image: screenshotUploads,
  },
  {
    title: 'Heavy Lifting by Privify',
    description:
      "Privify reads all the documents and get you CRISP Insights",
    image: screenshotInsights,
  },
  {
    title: 'Privify Magic ✨',
    description:
      "Privify reads through the documents and asks for specific Evidences. It processes the evidence to show whether they are valid or not + Leaves specific comments for the auditor",
    image: screenshotMagic,
  },
  {
    title: 'Auditor Reviews & Reporting',
    description:
      'The Auditor goes through the findings and finalizes the report! + Easily deliver beautifully crafted compliance reports in fraction on the effort.',
    image: screenshotAudit,
  },
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isAutoChanging, setIsAutoChanging] = useState(true)

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    const onMediaQueryChange = (event: MediaQueryListEvent) => {
      setTabOrientation(event.matches ? 'vertical' : 'horizontal');
    };

    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    // Set the initial state based on the current media query
    setTabOrientation(lgMediaQuery.matches ? 'vertical' : 'horizontal');

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (!isAutoChanging) return

    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 1500)

    return () => {
      clearInterval(interval)
    }
  }, [isAutoChanging])

  const handleTabClick = (index: number) => {
    setSelectedIndex(index)
    setIsAutoChanging(false)
  }

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            The best tool a Compliance Team Deserves.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Just upload the documents and evidences: Let <span className="font-bold">Privify </span> do the heavy lifting for you.
          </p>
        </div>
        <TabGroup
          selectedIndex={selectedIndex}
          onChange={(index) => handleTabClick(index)}
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                    selectedIndex === featureIndex
                      ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                      : 'hover:bg-white/10 lg:hover:bg-white/5',
                  )}
                >
                  <h3>
                    <Tab
                      className={clsx(
                        'font-display text-lg ui-not-focus-visible:outline-none',
                        selectedIndex === featureIndex
                          ? 'text-blue-600 lg:text-white'
                          : 'text-blue-100 hover:text-white lg:text-white',
                      )}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      {feature.title}
                    </Tab>
                  </h3>
                  <p
                    className={clsx(
                      'mt-2 hidden text-sm lg:block',
                      selectedIndex === featureIndex
                        ? 'text-white'
                        : 'text-blue-100 group-hover:text-white',
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-7">
            {features.map((feature, index) => (
              <TabPanel key={feature.title} unmount={false}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={clsx(
                    'mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem] transition-opacity duration-500 ease-in-out',
                    { 'opacity-0': selectedIndex !== index, 'opacity-100': selectedIndex === index }
                  )}
                >
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
