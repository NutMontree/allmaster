"use client"
import React from 'react';
import { useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import { testimonials } from '@/app/api/testimonial';
import Link from 'next/link';
import Image from 'next/image';
import { propertyHomes } from '@/app/api/propertyhomes';

export default function Details() {
    const { slug } = useParams();

    const item = propertyHomes.find((item) => item.slug === slug);
    return (
        <section className="!pt-44 pb-20 relative" >
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                <div className="grid grid-cols-12 items-end gap-6">
                    <div className="lg:col-span-8 col-span-12">
                        <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.name}</h1>
                        <div className="flex gap-2.5">
                            <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                            <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.location}</p>
                        </div>
                    </div>
                    {/* <div className="lg:col-span-4 col-span-12">
                        <div className='flex'>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                <Icon icon={'solar:bed-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.beds} Bedrooms
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                <Icon icon={'solar:bath-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.baths} Bathrooms
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                                <Icon
                                    icon={'lineicons:arrow-all-direction'}
                                    width={20}
                                    height={20}
                                />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.area}m<sup>2</sup>
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="grid grid-cols-12 mt-8 gap-8">
                    <div className="lg:col-span-8 col-span-12 row-span-2">
                        {item?.images && item?.images[0] && (
                            <div className="">
                                <Image
                                    src={item.images[0]?.src}
                                    alt="Main Property Image"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl w-full"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-4 lg:block hidden">
                        {item?.images && item?.images[1] && (
                            <Image src={item.images[1]?.src} alt="Property Image 2" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[2] && (
                            <Image src={item.images[2]?.src} alt="Property Image 3" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[3] && (
                            <Image src={item.images[3]?.src} alt="Property Image 4" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="lg:col-span-8 col-span-12">
                        <h3 className='text-xl font-medium'>Website details</h3>
                        <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            <div className="flex items-center gap-6">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className='fill-black dark:fill-amber-50' fill="#9fb91d" viewBox="0 0 256 256"><path d="M240,128l-48,40H64L16,128,64,88H192Z" opacity="0.2"></path><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path></svg>
                                    {/* <Image src="/images/SVGs/property-details.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/property-details-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} /> */}
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Website details</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        {item?.details}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/SVGs/smart-home-access.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/smart-home-access-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Control</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        {item?.contronl}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className='w-8 h-8 dark:hidden fill-black dark:fill-amber-50' fill="#9fb91d" viewBox="0 0 256 256"><path d="M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z" opacity="0.2"></path><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className='w-8 h-8 dark:block hidden fill-black dark:fill-amber-50' viewBox="0 0 256 256"><path d="M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z" opacity="0.2"></path><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className='fill-black dark:fill-amber-50' viewBox="0 0 256 256"><path d="M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z" opacity="0.2"></path><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg> */}
                                    {/* <Image src="/images/SVGs/energyefficient.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/SVGs/energyefficient-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} /> */}
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Creativity</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        {item?.creation}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className='text-dark dark:text-white text-xm '>
                            </p>
                            <p className='text-dark dark:text-white text-xm grid gap-4'>
                                {item?.description.map((desc, index) => (
                                    <span key={index}>{desc.title}<br /></span>
                                ))}
                            </p>

                        </div>
                        {/* <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium'>What this Website offers</h3>
                            <div className="grid grid-cols-3 mt-5 gap-6">
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:aperture" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>1</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:chart-pie-slice" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>2</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:television-simple" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>3</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:sun" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>4</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:video-camera" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>5</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:cloud" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>6</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Google Map */}

                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin"
                            width="1114" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl w-full">
                        </iframe> */}
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="bg-[#EFBF04]/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                            <h4 className='text-dark text-3xl font-medium dark:text-white'>
                                {item?.rate}
                            </h4>
                            <p className='text-sm text-dark/50 dark:text-white'>Discounted Price</p>
                            <Link href="/contactus" className='py-4 px-8 bg-[#EFBF04] text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'>
                                Get in touch
                            </Link>
                            <div className="absolute right-0 top-4 -z-[1]">
                                <Image src="/images/properties/vector.svg" width={400} height={500} alt="vector" unoptimized={true} />
                            </div>
                        </div>
                        {testimonials.slice(0, 1).map((item, index) => (
                            <div key={index} className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6">
                                <Icon icon="ph:house-simple" width={44} height={44} className="text-[#EFBF04]" />
                                <p className='text-xm text-dark dark:text-white'>{item.review}</p>
                                <div className="flex items-center gap-6">
                                    <Image src={item.image} alt={item.name} width={400} height={500} className='w-20 h-20 rounded-2xl' unoptimized={true} />
                                    <div className="">
                                        <h3 className='text-xm text-dark dark:text-white'>{item.name}</h3>
                                        <h4 className='text-base text-dark/50 dark:text-white/50'>{item.position}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
