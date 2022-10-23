import { ChangeEventHandler, FC } from "react"
import { useSearchParams } from 'react-router-dom'

export const HeroSection: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleQuery: ChangeEventHandler<HTMLInputElement> = (e) => setSearchParams({
        search: e.target.value
    })

    return (
        <section className="w-screen bg-white shadow-md">
            <div className="w-full max-w-[1500px] mx-auto px-4 py-10 flex space-x-20">

                <div className="w-min space-y-4 py-8">
                    <h1 className="font-semibold text-[#13171B] text-5xl whitespace-nowrap">Book car in easy steps</h1>
                    <p className="text-[#A6AFBA] text-xl tracking-wide leading-relaxed">Renting a car brings  you freedom, we’ll help you find the best car for you at a great price.</p>
                </div>

                <div className="p-8 rounded-3xl shadow w-full">
                    <div className="space-y-2">
                        <label className="text-[#13171B] font-medium">Search</label>
                        <input
                            className="w-full py-2 px-4 tracking-wide placeholder:tracking-wide bg-[#F6F7F9] rounded-lg outline-none"
                            placeholder="Search by name"
                            onChange={handleQuery}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}