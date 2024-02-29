import { ChainBlock } from "@/components/common/chain-block";
import { StatBlock } from "@/components/common/stat-block";
import { Transaction } from "@/components/common/transaction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ChevronDown,
  ChevronsUp,
  CornerDownRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const data: Array<Parameters<typeof StatBlock>[0]> = [
    {
      sign: "$",
      variation: -4.19,
      title: "pwr price",
      value: 1.098,
    },
    {
      sign: "M",
      title: "transactions",
      value: 1960.01,
      secondary: { title: "Tps", value: 5200 },
    },

    {
      sign: "$",
      title: "pwr market cap",
      value: 100000000,
    },
    {
      title: "Blocks",
      value: 10199,
    },
    {
      title: "Validators",
      value: 19190,
    },
  ];

  const blocks: Array<Parameters<typeof ChainBlock>[0]> = [
    {
      pwr: 0.49876,
      date: "10 secs ago",
      transactions: 89,
      id: 17214042,
      recipient: "resync-build",
    },
    {
      pwr: 0.49876,
      date: "10 secs ago",
      transactions: 89,
      id: 17214043,
      recipient: "resync-build",
    },
    {
      pwr: 0.49876,
      date: "10 secs ago",
      transactions: 89,
      id: 17214044,
      recipient: "resync-build",
    },
    {
      pwr: 0.49876,
      date: "10 secs ago",
      transactions: 89,
      id: 17214045,
      recipient: "resync-build",
    },
    {
      pwr: 0.49876,
      date: "10 secs ago",
      transactions: 89,
      id: 17214046,
      recipient: "resync-build",
    },
  ];

  const transactions: Array<Parameters<typeof Transaction>[0]> = [
    {
      id: "0x7796aaaaa",
      date: "10 secs ago",
      pwr: 0.49867,
      to: "0x95222aaaaaaaaaCC4ba",
      from: "0x95222aaaaaaaaafedg5",
    },
    {
      id: "0x7796aaaab",
      date: "10 secs ago",
      pwr: 0,
      to: "0x95222aaaaaaaaaCC4ba",
      from: "0x95222aaaaaaaaafedg5",
    },
    {
      id: "0x7796aaaad",
      date: "10 secs ago",
      pwr: 0.49867,
      to: "0x95222aaaaaaaaaCC4ba",
      from: "0x95222aaaaaaaaafedg5",
    },
    {
      id: "0x7796aaaac",
      date: "10 secs ago",
      pwr: 0.49867,
      to: "0x95222aaaaaaaaaCC4ba",
      from: "0x95222aaaaaaaaafedg5",
    },
    {
      id: "0x7796aaaad",
      date: "10 secs ago",
      pwr: 0.49867,
      to: "0x95222aaaaaaaaaCC4ba",
      from: "0x95222aaaaaaaaafedg5",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center lg:py-24 pt-4 pb-16 container mx-auto md:gap-y-12 gap-y-6 max-w-5xl">
      <section className="w-full text-center gap-y-6 flex flex-col items-center py-4 max-w-4xl lg:px-8 px-4">
        <h1 className="lg:text-6xl text-5xl font-bold pb-4 px-4">
          The PWR Chain Explorer
        </h1>
        <div className="border flex lg:px-6 p-2 rounded-2xl gap-x-2 lg:gap-x-4 items-center h-16 w-full">
          <Button
            className="bg-brand-bg flex gap-x-2 rounded-lg"
            variant={"ghost"}
          >
            All Filters
            <ChevronDown className="text-brand-secondary" size={24} />
          </Button>
          <Input
            placeholder="Search by Address/Tsx Hash/Block/Token/Domain Name"
            title="Search by Address/Tsx Hash/Block/Token/Domain Name"
            className="border-none shadow-none truncate"
          />
          <Button
            type="submit"
            variant={"ghost"}
            className="text-brand-secondary gap-x-2 text-sm hidden md:flex"
          >
            <CornerDownRight />
            Enter
          </Button>
        </div>
      </section>
      <div className="flex md:py-8 gap-x-4 py-2 flex-col lg:flex-row">
        <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1 pb-4 md:pb-0">
          <StatBlock
            {...data[0]}
            logo={
              <Image src="/icons/pwr.svg" height={32} width={32} alt="pwr" />
            }
          />
          <StatBlock
            {...data[1]}
            className="md:col-span-2"
            logo={
              <Image
                src="/icons/transaction.svg"
                height={32}
                width={32}
                alt="pwr"
              />
            }
          />

          <StatBlock
            {...data[2]}
            logo={
              <Image src="/icons/globe.svg" height={32} width={32} alt="pwr" />
            }
          />
          <StatBlock
            {...data[3]}
            logo={
              <Image src="/icons/clock.svg" height={32} width={32} alt="pwr" />
            }
          />
          <StatBlock
            {...data[4]}
            logo={
              <Image src="/icons/nodes.svg" height={32} width={32} alt="pwr" />
            }
          />
        </div>
        <Image
          src="/graph.png"
          width={347}
          height={192}
          alt="graph"
          className="shadow border-secondary border rounded-md"
        />
      </div>
      <div className="grid gap-x-16 w-full md:grid-cols-2 gap-y-4 grid-cols-1">
        <section className="flex flex-col md:gap-y-6 md:items-center px-4 gap-y-3 grow w-full col-span-1">
          <h1 className="md:text-3xl text-xl text-start md:text-center font-medium">
            Latest Block
          </h1>
          <div className="flex flex-col gap-y-2 grow w-full pb-2">
            {blocks.map((b, i) => (
              <ChainBlock
                {...b}
                key={b.id}
                className={i % 2 !== 0 ? "!bg-white" : ""}
              />
            ))}
          </div>
          <Link href="/" className="uppercase font-bold w-fit p-0 mx-auto">
            <Button
              className="md:gap-x-2 uppercase font-medium mx-auto md:text-base p-0 text-xs items-center flex h-fit"
              variant={"link"}
            >
              View all blocks <ArrowRight className="h-3 md:h-6" />
            </Button>
          </Link>
        </section>
        <section className="flex flex-col md:gap-y-6 md:items-center px-4 gap-y-3 grow w-full col-span-1">
          <h1 className="md:text-3xl text-xl text-start md:text-center font-medium">
            Latest Transactions
          </h1>
          <div className="flex flex-col gap-y-2 grow w-full pb-2">
            {transactions.map((t, i) => (
              <Transaction
                {...t}
                key={t.id}
                className={i % 2 !== 0 ? "!bg-white" : ""}
              />
            ))}
          </div>
          <Link href="/" className="uppercase font-bold w-fit p-0 mx-auto">
            <Button
              className="md:gap-x-2 uppercase font-medium mx-auto md:text-base p-0 text-sm flex h-fit items-center"
              variant={"link"}
            >
              View all Transactions <ArrowRight className="h-3 md:h-6" />
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
