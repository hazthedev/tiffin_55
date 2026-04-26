import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  tiers?: string[];
}

interface Category {
  id: string;
  label: string;
  labelBm: string;
}

interface Props {
  categories: Category[];
  items: MenuItem[];
}

const filterOptions = [
  { key: 'halal', label: 'Halal' },
  { key: 'vegetarian', label: 'Vegetarian' },
  { key: 'popular', label: 'Popular' },
  { key: 'new', label: 'New' },
  { key: 'under15', label: 'Under RM15' },
];

export default function MenuTabs({ categories, items }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (item.categoryId !== activeCategory) return false;
      if (activeFilters.length === 0) return true;
      return activeFilters.every((f) => item.tags.includes(f));
    });
  }, [items, activeCategory, activeFilters]);

  return (
    <div>
      {/* Category tabs */}
      <div className="sticky top-[64px] z-30 bg-charcoal/95 backdrop-blur-md border-b border-concrete-grey/20 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-3">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative shrink-0 px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                activeCategory === cat.id ? 'text-copper' : 'text-cream/60 hover:text-cream'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-copper rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Filter chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filterOptions.map((opt) => {
          const active = activeFilters.includes(opt.key);
          return (
            <button
              key={opt.key}
              onClick={() => toggleFilter(opt.key)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                active
                  ? 'border-copper bg-copper/10 text-copper'
                  : 'border-concrete-grey/30 text-cream/50 hover:text-cream/80 hover:border-concrete-grey/50'
              }`}
            >
              {opt.key === 'halal' && active && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              )}
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Menu grid */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="group rounded-sm overflow-hidden bg-charcoal border border-concrete-grey/10 hover:border-copper/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(197,100,45,0.12)]"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-coal-brown relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Tiffin tier badge */}
                {item.tiers && item.tiers.length > 0 && (
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    {item.tiers.map((_, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-2 rounded-sm bg-copper/80 border border-cream/20"
                        style={{ opacity: 1 - idx * 0.25 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-cream group-hover:text-copper transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-sm text-copper shrink-0">
                    RM {item.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium rounded-sm bg-coal-brown text-cream/50 border border-concrete-grey/10"
                    >
                      {tag === 'under15' ? 'Under RM15' : tag}
                    </span>
                  ))}
                </div>

                {/* Tiers list */}
                {item.tiers && item.tiers.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-concrete-grey/10">
                    <p className="text-[10px] uppercase tracking-wider text-cream/30 font-semibold mb-2">Stacked with</p>
                    <div className="space-y-1.5">
                      {item.tiers.map((tier, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-cream/70">
                          <span className="w-5 h-5 rounded-sm bg-copper/10 text-copper flex items-center justify-center font-mono text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          {tier}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="mt-12 text-center py-16">
          <p className="text-cream/40 text-sm">No items match your filters.</p>
          <button
            onClick={() => setActiveFilters([])}
            className="mt-3 text-sm text-copper hover:text-cream transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
