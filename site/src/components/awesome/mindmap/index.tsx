import React, { useState, useRef, useEffect } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { Toolbar } from 'markmap-toolbar';
import 'markmap-toolbar/dist/style.css';

const transformer = new Transformer();

// https://github.com/markmap/markmap

function renderToolbar(mm: Markmap, wrapper: HTMLElement) {
  while (wrapper?.firstChild) wrapper.firstChild.remove();
  if (mm && wrapper) {
    const toolbar = new Toolbar();
    toolbar.attach(mm);
    toolbar.setItems([...Toolbar.defaultItems]);
    wrapper.append(toolbar.render());
  }
}

export default function MarkmapHooks({
  value
}: {value: string}) {
  const [hasRenderedSvg, setHasRenderedSvg] = useState(false)
  // Ref for SVG element
  const refSvg = useRef<SVGSVGElement>();
  // Ref for markmap object
  const refMm = useRef<Markmap>();
  // Ref for toolbar wrapper
  const refToolbar = useRef<HTMLDivElement>();

  useEffect(() => {
    // Create markmap and save to refMm
    const mm = Markmap.create(refSvg.current);
    refMm.current = mm;
  }, [refSvg.current]);

  useEffect(() => {
    if(hasRenderedSvg) {
        return
    }
    if(!(refMm.current && value)) {
        return
    }
    setHasRenderedSvg(true)
    
    // Update data for markmap once value is changed
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root);
    mm.fit();
    renderToolbar(refMm.current, refToolbar.current);
  }, [refMm.current, value]);


  return (
    <div className='relative'>
      <svg className="w-full" ref={refSvg} />
      <div className="absolute bottom-1 right-1" ref={refToolbar}></div>
    </div>
  );
}
