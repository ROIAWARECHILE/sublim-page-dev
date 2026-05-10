import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio no encontrado | SUBLIM" };
  return {
    title: `${service.title} | SUBLIM`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
