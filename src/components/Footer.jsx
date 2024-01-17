import React from 'react'

const Footer = () => {
    return (
        <div class="h-1/2">
            <div class="mt-8 pt-0">
                <div class="sm:flex sm:justify-between">
                    <p class="text-xs text-gray-500">&copy; 2024. Michael James Angelo Ragon. All rights reserved.</p>

                    <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                        </li>

                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75"> Cookies </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
