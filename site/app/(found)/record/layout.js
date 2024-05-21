'use client';

import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP } from "./[id]/data";
import LayoutStructure from "@/components/layout-structure";
import SegmentBreadcrumbs from "@/components/segment-breadcrumbs";


export default function Layout({ children }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  console.log('segments', segments);
  console.log('pathname', pathname);

  const id = findIdByPathname(pathname);
  const { title, background } = RECORDS_MAP[id]

  return (
    <LayoutStructure
        background={background}
        title={
            <SegmentBreadcrumbs 
                segments={segments} 
                startingSegment="/record"
                segmentTitlesMap={SEGMENT_TITLES_MAP}
            />
        }
    >
        <div className="flex flex-col items-center">{children}</div>
    </LayoutStructure>
  )
}

