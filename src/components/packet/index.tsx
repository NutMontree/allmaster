import React from 'react'
import Image from 'next/image'
import { packetData } from './data'

export default function Packet() {
    return (
        <>
            <section>
                <Image src='/images/icon/correct.webp' width={20} height={20} alt='' />
                <div className="bg-white dark:bg-dark py-12 px-6 transition-colors duration-300">
                    <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                        <div className='mb-16 flex flex-col gap-3 '>
                            <div className='flex gap-2.5 items-center justify-center'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#EFBF04" viewBox="0 0 256 256"><path d="M238,82.73A8,8,0,0,0,232,80H187.63L134,18.73a8,8,0,0,0-12,0L68.37,80H24a8,8,0,0,0-7.93,9.06L31.14,202.12A16.06,16.06,0,0,0,47,216H209a16.06,16.06,0,0,0,15.86-13.88L239.93,89.06A8,8,0,0,0,238,82.73ZM81.6,184a7.32,7.32,0,0,1-.81,0,8,8,0,0,1-8-7.2l-5.6-56a8,8,0,0,1,15.92-1.6l5.6,56A8,8,0,0,1,81.6,184Zm54.4-8a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM89.63,80,128,36.15,166.37,80Zm99.13,40.8-5.6,56a8,8,0,0,1-7.95,7.2,7.32,7.32,0,0,1-.81,0,8,8,0,0,1-7.16-8.76l5.6-56a8,8,0,0,1,15.92,1.6Z"></path></svg>
                                </span>
                                <p className='text-base font-semibold text-dark/75 dark:text-white/75'>
                                    Packet
                                </p>
                            </div>
                            <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2'>
                                แพ็กเกจบริการออกแบบและพัฒนาเว็บไซต์ ครบวงจร
                            </h2>
                            <p className='text-xm font-normal text-black/50 dark:text-white/50 text-center'>
                                สร้างเว็บไซต์ ไม่ซ้ำใครกับเรา! ปรับแต่งเว็บไซต์ให้เหมาะกับแบรนด์และเป้าหมายของคุณ ด้วยบริการออกแบบที่เฉพาะเจาะจงและสร้างสรรค์ ติดต่อขอคำปรึกษาฟรีวันนี้เพื่อเริ่มต้นสร้างเว็บไซต์ของคุณ
                            </p>
                        </div>

                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-24'>
                                {packetData.dataItems.map((item) => (
                                    <>
                                        <div className="bg-gray-50 dark:bg-dark rounded-2xl shadow-lg p-2 border-2 border-[#ddb056] hover:border-[#ffaa00] relative transition-colors duration-300">
                                            <div className="stext-center text-sm rounded-full px-2 py-2 mb-4">{item.subtitle}</div>
                                            <div className='text-2xl font-bold text-center mb-4'>{item.title}</div>
                                            <div className='text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4'>{item.price}</div>
                                            <p className="text-sm text-center text-gray-500 mb-4">
                                                ราคายังไม่รวมภาษีมูลค่าเพิ่ม VAT 7%
                                            </p>
                                            <hr className="border-gray-300 mb-4" />
                                            <div className=''>
                                                {item.Description.map((dect) => (
                                                    <div key={dect.describetion} className='flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2'>
                                                        <Image src="/images/icon/correct.webp" width={10} height={10} alt="" /> {dect.describetion}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </>
                                ))}
                            </div >
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24">

                            {/* <!-- Starter --> */}
                            <div className="bg-gray-50 dark:bg-dark rounded-2xl shadow-lg p-6 text-center border-2 border-[#ddb056] hover:border-[#ffaa00] relative transition-colors duration-300">

                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Starter</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">
                                    Sale page / Landing page</p>
                                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">7,900฿</p>
                                <ul className="text-left text-sm space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> ออกแบบหน้าเว็บไซต์หน้าหลัก
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> จำนวนเพจ: 1 หน้า
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> โดเมน (Domain)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> พื้นที่เก็บข้อมูล 2GB
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> สินค้าหรือบริการแยกรายการ
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> รองรับบทความ ข่าวสาร
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> ตะกร้าสินค้า สั่งซื้อสินค้าออนไลน์
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> มีระบบจัดการหลังบ้าน
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ติดตั้ง Google Analytic
                                    </li>

                                </ul>
                                <p className="text-gray-400 text-sm mb-4">ต่ออายุปีละ 2,500฿</p>

                            </div>

                            {/* <!-- Silver --> */}
                            <div className="bg-gray-50 dark:bg-dark rounded-2xl shadow-lg p-6 text-center border-2 border-[#ddb056] hover:border-[#ffaa00] relative transition-colors duration-300">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Silver</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">เหมาะสำหรับธุรกิจเริ่มต้น</p>
                                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4 pt-6">15,900฿</p>
                                <ul className="text-left text-sm space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ออกแบบหน้าเว็บไซต์หน้าหลัก
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> จำนวนเพจ: 5 หน้า
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> โดเมน (Domain)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> พื้นที่เก็บข้อมูล 4GB
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> สินค้าหรือบริการแยกรายการ
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> รองรับบทความ ข่าวสาร
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> ตะกร้าสินค้า สั่งซื้อสินค้าออนไลน์
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ระบบจัดการหลังบ้าน
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> Google Analytic
                                    </li>
                                </ul>
                                <p className="text-gray-400 text-sm mb-4">ต่ออายุปีละ 3,000฿</p>


                            </div>

                            {/* <!-- Premium --> */}
                            <div className="bg-gray-50 dark:bg-dark rounded-2xl shadow-lg p-6 text-center border-2 border-[#ddb056] hover:border-[#ffaa00] relative transition-colors duration-300">
                                <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#EFBF04] text-black text-xl px-3 py-1 rounded-full">ยอดนิยม</span>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Premium</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">เหมาะสำหรับธุรกิจหลายหมวดหมู่</p>
                                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">25,900฿</p>
                                <ul className="text-left text-sm space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ออกแบบหน้าเว็บไซต์หน้าหลัก
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> จำนวนเพจ: 30 หน้า
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> โดเมน (Domain)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> พื้นที่เก็บข้อมูล 15GB
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> สินค้าหรือบริการแยกรายการ
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> รองรับบทความ ข่าวสาร
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/incorrect.webp" width={20} height={20} alt="" /> ตะกร้าสินค้า สั่งซื้อสินค้าออนไลน์
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ระบบจัดการหลังบ้าน
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> Google Analytic
                                    </li>
                                </ul>
                                <p className="text-gray-400 text-sm mb-4">ต่ออายุปีละ 3,500฿</p>

                            </div>

                            {/* <!-- E-commerce --> */}
                            <div className="bg-gray-50 dark:bg-dark rounded-2xl shadow-lg p-6 text-center border-2 border-[#ddb056] hover:border-[#ffaa00] relative transition-colors duration-300">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">E-commerce</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">ร้านค้าออนไลน์ พร้อมระบบสั่งซื้อ</p>
                                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">35,900฿</p>
                                <ul className="text-left text-sm space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ออกแบบหน้าเว็บไซต์หน้าหลัก
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> จำนวนเพจ: 30 หน้า
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> โดเมน (Domain)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> พื้นที่เก็บข้อมูล 20GB
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ลงสินค้า 50 รายการแรก
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> รองรับบทความ ข่าวสาร
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ตะกร้าสินค้า สั่งซื้อสินค้าออนไลน์
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> ระบบจัดการหลังบ้าน
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Image src="/images/icon/correct.webp" width={20} height={20} alt="" /> Google Analytic
                                    </li>
                                </ul>
                                <p className="text-gray-400 text-sm mb-4">ต่ออายุปีละ 4,000฿</p>

                            </div>
                        </div>

                        {/* <!-- หมายเหตุราคายังไม่รวม VAT --> */}
                        <div className="mt-24 text-center ">
                            <p className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                                ⚠️ หมายเหตุ: ราคายังไม่รวมภาษีมูลค่าเพิ่ม (VAT)
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-m mx-auto mt-6">
                            {/* <!-- ปุ่ม Line --> */}
                            <a href="https://line.me/ti/p/yourlineid" target="_blank"
                                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-xl shadow-md transition-colors duration-300">
                                <Image src="/images/icon/line.webp" width={55} height={55} alt="Line" />
                                ติดต่อผ่าน Line
                            </a>

                            {/* <!-- ปุ่ม Messenger --> */}
                            <a href="https://m.me/yourfacebookid" target="_blank"
                                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-xl shadow-md transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-4" fill="white" viewBox="0 0 256 256"><path d="M146.34,109.66a8,8,0,0,1,0-11.32L180.69,64H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8V96a8,8,0,0,1-16,0V75.31l-34.34,34.35a8,8,0,0,1-11.32,0Zm68,56.8-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"></path></svg>
                                ติดต่อผ่าน Messenger
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
