/* ════════════════════════════════════════════════════════════════
   MAISON — app.js
   SPA Router + Product Data + All Page Logic
   ════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1,
    name: 'Silk Slip Dress',
    sub: 'Midnight Black',
    price: 285,
    originalPrice: null,
    category: 'dresses',
    badge: 'New',
    image: 'images/dress.jpg',
    images: ['images/dress.jpg', 'images/blazer.jpg', 'images/trousers.jpg'],
    colors: ['#1A1512', '#F5F0EA', '#8B7355'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStock: ['XL'],
    rating: 4.8,
    reviewCount: 124,
    description: 'Crafted from 100% Grade A silk, this slip dress drapes effortlessly against the body. The subtle bias cut ensures a flattering silhouette for every form. Finished with a delicate lace trim at the hem and adjustable satin straps.',
    details: ['100% Grade A Silk', 'Dry clean only', 'Made in Italy', 'True to size', 'Model is 5\'9" wearing size S'],
    care: ['Hand wash cold or dry clean', 'Do not tumble dry', 'Iron on low heat', 'Store flat or hanging'],
    sku: 'MSN-SSD-001',
    reviews: [
      { name: 'Amelia R.', rating: 5, date: 'July 2026', text: 'Absolutely stunning. The quality is exceptional — you can immediately feel the difference in the silk. Wore it to a gallery opening and received so many compliments.' },
      { name: 'Sofia L.', rating: 5, date: 'June 2026', text: 'Perfect minimalist piece. Fits beautifully and the color is exactly as shown. True to size.' },
    ]
  },
  {
    id: 2,
    name: 'Oversized Cream Blazer',
    sub: 'Tailored Fit',
    price: 420,
    originalPrice: 560,
    category: 'blazers',
    badge: 'Sale',
    image: 'images/blazer.jpg',
    images: ['images/blazer.jpg', 'images/trousers.jpg', 'images/dress.jpg'],
    colors: ['#F5F0EA', '#1A1512', '#C4A882'],
    sizes: ['XS', 'S', 'M', 'L'],
    outOfStock: [],
    rating: 4.9,
    reviewCount: 87,
    description: 'The blazer that works overtime. Structured shoulders with a relaxed, oversized body — this is the cornerstone of a capsule wardrobe. Crafted in a heavyweight linen-wool blend with a silky lining and statement tortoiseshell buttons.',
    details: ['70% Linen, 30% Wool', 'Dry clean recommended', 'Made in Portugal', 'Oversized — size down for a more fitted look', 'Fully lined in cupro'],
    care: ['Dry clean preferred', 'Steam to remove wrinkles', 'Hang to store'],
    sku: 'MSN-OCB-002',
    reviews: [
      { name: 'Claire M.', rating: 5, date: 'July 2026', text: 'This blazer is a work of art. The weight and drape are perfect. I\'ve been wearing it non-stop since it arrived.' },
      { name: 'Isabelle T.', rating: 4, date: 'May 2026', text: 'Gorgeous quality. Sized up as recommended and the fit is perfection.' },
    ]
  },
  {
    id: 3,
    name: 'Wide-Leg Linen Trousers',
    sub: 'Off-White',
    price: 195,
    originalPrice: null,
    category: 'trousers',
    badge: null,
    image: 'images/trousers.jpg',
    images: ['images/trousers.jpg', 'images/shirt.jpg', 'images/blazer.jpg'],
    colors: ['#F5F0EA', '#D4C4B0', '#1A1512'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStock: ['XS'],
    rating: 4.7,
    reviewCount: 63,
    description: 'These wide-leg trousers are designed for the kind of days when you want to look put-together without any effort. Washed linen that gets better with every wear. High-rise waist with a flat front for a clean, modern silhouette.',
    details: ['100% Stonewashed Linen', 'Machine wash cold, gentle', 'Made in Italy', 'High-rise fit', 'Side invisible zip closure'],
    care: ['Machine wash cold, gentle cycle', 'Lay flat to dry', 'Iron slightly damp', 'Do not bleach'],
    sku: 'MSN-WLT-003',
    reviews: [
      { name: 'Priya K.', rating: 5, date: 'July 2026', text: 'The linen quality is incredible. Soft straight from the bag. These are my new favourites.' },
    ]
  },
  {
    id: 4,
    name: 'Camel Wool Overcoat',
    sub: 'Autumn / Winter',
    price: 695,
    originalPrice: null,
    category: 'coats',
    badge: 'Bestseller',
    image: 'images/coat.jpg',
    images: ['images/coat.jpg', 'images/blazer.jpg', 'images/shirt.jpg'],
    colors: ['#C4A882', '#1A1512', '#8B7355'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStock: ['XS', 'S'],
    rating: 5.0,
    reviewCount: 211,
    description: 'The coat you will pass down. Cut from a dense Italian camel wool-cashmere blend, this overcoat features clean, architectural lines with a single-button closure and deep pockets. Fully lined in rich cupro for a smooth, luxurious feel against any outfit.',
    details: ['80% Camel Wool, 20% Cashmere', 'Dry clean only', 'Made in Italy', 'Relaxed oversized silhouette', 'Single button closure', 'Fully cupro lined'],
    care: ['Dry clean only', 'Store on a wide, padded hanger', 'Use a fabric brush to remove surface debris', 'Never wet clean'],
    sku: 'MSN-CWO-004',
    reviews: [
      { name: 'Natasha B.', rating: 5, date: 'June 2026', text: 'Worth every single penny. I have owned coats from every luxury house and this is on par with all of them. The wool is incredibly rich and structured.' },
      { name: 'Mei L.', rating: 5, date: 'May 2026', text: 'Perfect camel coat. Classic silhouette, amazing quality. I have been searching for this exact coat for years.' },
    ]
  },
  {
    id: 5,
    name: 'Linen Button-Up Shirt',
    sub: 'Classic White',
    price: 145,
    originalPrice: null,
    category: 'shirts',
    badge: 'New',
    image: 'images/shirt.jpg',
    images: ['images/shirt.jpg', 'images/trousers.jpg', 'images/blazer.jpg'],
    colors: ['#FFFFFF', '#F5F0EA', '#1A1512'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    outOfStock: [],
    rating: 4.6,
    reviewCount: 45,
    description: 'The foundational white shirt, reimagined. Made from a 120-thread-count Irish linen, this is a shirt that breathes in summer and layers beautifully in winter. The relaxed, boxy cut is contemporary without being trendy.',
    details: ['100% Irish Linen', 'Machine wash cold', 'Made in Ireland', 'Relaxed boxy fit', 'Concealed button placket', 'Mother-of-pearl buttons'],
    care: ['Machine wash cold', 'Tumble dry low or line dry', 'Iron slightly damp for crisp look', 'Do not bleach'],
    sku: 'MSN-LBS-005',
    reviews: [
      { name: 'Emma W.', rating: 5, date: 'July 2026', text: 'The quality of this linen is incredible for the price. It\'s the perfect everyday shirt.' },
    ]
  },
  {
    id: 6,
    name: 'Structured Mini Dress',
    sub: 'Ivory Cream',
    price: 310,
    originalPrice: 395,
    category: 'dresses',
    badge: 'Sale',
    image: 'images/dress.jpg',
    images: ['images/dress.jpg', 'images/coat.jpg', 'images/shirt.jpg'],
    colors: ['#F5F0EA', '#BE185D', '#1A1512'],
    sizes: ['XS', 'S', 'M', 'L'],
    outOfStock: ['XS'],
    rating: 4.5,
    reviewCount: 32,
    description: 'A study in architectural minimalism. This structured mini dress features a precise cut with subtle seam detailing, a concealed zip at the back, and a hem that falls just above the knee. Perfect for dinners, gallery openings, or any occasion that calls for effortless elegance.',
    details: ['65% Wool, 35% Silk', 'Dry clean only', 'Made in France', 'Back zip closure', 'Fully lined'],
    care: ['Dry clean only', 'Store hanging', 'Steam to refresh'],
    sku: 'MSN-SMD-006',
    reviews: [
      { name: 'Zoe A.', rating: 4, date: 'June 2026', text: 'Stunning cut. The fabric is structured yet comfortable. Paired it with my camel coat and received so many compliments.' },
    ]
  },
  {
    id: 7,
    name: 'Merino Turtleneck',
    sub: 'Charcoal Grey',
    price: 165,
    originalPrice: null,
    category: 'shirts',
    badge: null,
    image: 'images/shirt.jpg',
    images: ['images/shirt.jpg', 'images/coat.jpg', 'images/trousers.jpg'],
    colors: ['#4A4A4A', '#F5F0EA', '#1A1512'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    outOfStock: [],
    rating: 4.8,
    reviewCount: 76,
    description: 'Ultra-fine 17.5-micron merino wool in a classic turtleneck silhouette. Worn alone or layered under a blazer, this is one of those rare pieces that transcends seasons. Machine washable.',
    details: ['100% 17.5 micron Merino Wool', 'Machine wash cold, delicate', 'Made in New Zealand', 'Slim fit', 'Ribbed cuffs and hem'],
    care: ['Machine wash cold, delicate cycle', 'Lay flat to dry', 'Do not tumble dry', 'Do not iron'],
    sku: 'MSN-MTN-007',
    reviews: [
      { name: 'Daniel O.', rating: 5, date: 'July 2026', text: 'Incredibly soft. No itch at all despite being a turtleneck. A true wardrobe essential.' },
    ]
  },
  {
    id: 8,
    name: 'Wide Leather Belt',
    sub: 'Tan / Gold',
    price: 125,
    originalPrice: null,
    category: 'trousers',
    badge: null,
    image: 'images/trousers.jpg',
    images: ['images/trousers.jpg', 'images/blazer.jpg'],
    colors: ['#8B7355', '#1A1512', '#C4A882'],
    sizes: ['XS/S', 'M/L', 'XL/XXL'],
    outOfStock: [],
    rating: 4.7,
    reviewCount: 28,
    description: 'Handcrafted from full-grain vegetable-tanned leather with solid brass hardware. This wide belt adds structure to any look — cinch a blazer, dress, or oversized shirt. The leather will develop a rich patina with wear.',
    details: ['Full-grain vegetable-tanned leather', 'Solid brass buckle', 'Handcrafted in Spain', '6cm width', 'One adjustable notch'],
    care: ['Wipe clean with damp cloth', 'Condition leather regularly', 'Store flat or loosely rolled', 'Keep away from direct sunlight'],
    sku: 'MSN-WLB-008',
    reviews: []
  },
  {
    id: 9,
    name: 'Fall In Love Quote Tee',
    sub: 'Stone White',
    price: 100,
    originalPrice: null,
    category: 'shirts',
    badge: 'New',
    image: 'images/quote-tee.jpg',
    images: ['images/quote-tee.jpg', 'images/shirt.jpg', 'images/trousers.jpg'],
    colors: ['#F5F0EA', '#1A1512', '#C4A882'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    outOfStock: [],
    rating: 4.9,
    reviewCount: 38,
    description: '"Fall in love with your problems. Maybe they will leave you too..." — A statement tee for those who wear their philosophy. Printed on a heavyweight stonewashed cotton tee with a relaxed, boxy fit. The oversized back graphic is printed in burgundy ink for a vintage editorial feel.',
    details: [
      '100% Heavyweight Stonewashed Cotton',
      'Machine wash cold, inside out',
      'Relaxed boxy fit — true to size',
      'Burgundy screen-printed back graphic',
      'Ribbed crewneck collar',
    ],
    care: [
      'Machine wash cold, inside out to preserve print',
      'Tumble dry low or hang dry',
      'Do not iron directly on print',
      'Do not bleach',
    ],
    sku: 'MSN-FLQ-009',
    reviews: [
      {
        name: 'Alex M.',
        rating: 5,
        date: 'July 2026',
        text: 'This tee hits different. The quote, the fit, the weight of the fabric — everything is perfect. Got so many questions about it.',
      },
      {
        name: 'Jordan K.',
        rating: 5,
        date: 'July 2026',
        text: 'Wore this on day one and already got three compliments. Boxy fit is exactly what I wanted.',
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('maison-cart') || '[]');
let wishlist = new Set(JSON.parse(localStorage.getItem('maison-wishlist') || '[]'));
let currentPage = 'home';
let currentFilter = 'all';
let currentSort = 'featured';
let activeProductId = null;
let selectedColor = 0;
let selectedSize = null;
let qty = 1;

// ═══════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════
function formatPrice(n) { return '$' + n.toFixed(2).replace(/\.00$/, ''); }
function saveCart() { localStorage.setItem('maison-cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('maison-wishlist', JSON.stringify([...wishlist])); }

function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.className = 'toast'; }, 3000);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<span class="star">★</span>';
    else if (i === full && half) html += '<span class="star" style="opacity:0.5">★</span>';
    else html += '<span class="star" style="opacity:0.2">★</span>';
  }
  return html;
}

// ═══════════════════════════════════════════════════════════════
// ROUTER / PAGE TRANSITIONS
// ═══════════════════════════════════════════════════════════════
function navigateTo(pageId, opts = {}) {
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(p => { p.classList.remove('active'); p.style.display = 'none'; });

  const target = document.getElementById('page-' + pageId);
  if (!target) return;
  currentPage = pageId;
  target.style.display = 'block';
  requestAnimationFrame(() => { target.classList.add('active'); });

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Close any open overlays
  closeCart();
  closeMobileMenu();

  if (pageId === 'home' && opts.section) {
    setTimeout(() => {
      const el = document.getElementById(opts.section);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
  if (pageId === 'shop') renderShop();
  if (pageId === 'product' && opts.productId) renderProduct(opts.productId);
  if (pageId === 'checkout') renderCheckout();

  // Re-trigger reveal animations
  setTimeout(initReveal, 100);
}

// ═══════════════════════════════════════════════════════════════
// NAVIGATION - delegate clicks
// ═══════════════════════════════════════════════════════════════
document.addEventListener('click', function(e) {
  const el = e.target.closest('[data-page]');
  if (!el) return;
  e.preventDefault();
  const page = el.dataset.page;
  const section = el.dataset.section;
  const category = el.dataset.category;
  if (category) { currentFilter = category; }
  navigateTo(page, { section, category });
});

// ═══════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
  document.getElementById('mobileOverlay').classList.add('show');
});
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('mobileOverlay').classList.remove('show');
}
document.getElementById('mobileMenuClose').addEventListener('click', closeMobileMenu);
document.getElementById('mobileOverlay').addEventListener('click', closeMobileMenu);

// Mobile nav links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
    const page = link.dataset.page;
    const section = link.dataset.section;
    navigateTo(page, { section });
  });
});

// Search overlay
const searchOverlay = document.getElementById('searchOverlay');
document.getElementById('searchBtn').addEventListener('click', () => {
  searchOverlay.classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 300);
});
document.getElementById('searchClose').addEventListener('click', () => searchOverlay.classList.remove('open'));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchOverlay.classList.remove('open');
    closeCart();
  }
});
document.querySelectorAll('.search-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.getElementById('searchInput').value = tag.textContent;
    document.getElementById('searchInput').focus();
  });
});

// ═══════════════════════════════════════════════════════════════
// CART
// ═══════════════════════════════════════════════════════════════
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  renderCartDrawer();
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartCount');
  badge.textContent = total;
  badge.classList.toggle('visible', total > 0);
}

function addToCart(productId, size, color, quantity) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const key = `${productId}-${size}-${color}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({
      key, productId,
      name: product.name,
      sub: size ? `${size} · ${product.colors[color] ? colorName(product.colors[color]) : ''}` : product.sub,
      price: product.price,
      image: product.image,
      qty: quantity,
      size,
      color
    });
  }
  saveCart();
  updateCartCount();
  showToast(`"${product.name}" added to cart ✓`, 'success');
  openCart();
}

function colorName(hex) {
  const map = { '#1A1512': 'Black', '#F5F0EA': 'Ivory', '#C4A882': 'Camel', '#8B7355': 'Tan', '#FFFFFF': 'White', '#4A4A4A': 'Charcoal', '#BE185D': 'Rose', '#D4C4B0': 'Sand' };
  return map[hex] || hex;
}

function renderCartDrawer() {
  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const empty = document.getElementById('cartEmpty');

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    itemsEl.appendChild(empty);
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'flex';

  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" id="cart-item-${idx}">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.sub}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeCartItem(${idx})" aria-label="Remove">×</button>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

window.updateCartQty = function(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(); updateCartCount(); renderCartDrawer();
};
window.removeCartItem = function(idx) {
  cart.splice(idx, 1);
  saveCart(); updateCartCount(); renderCartDrawer();
};

document.getElementById('checkoutBtn').addEventListener('click', () => {
  closeCart();
  navigateTo('checkout');
});

// ═══════════════════════════════════════════════════════════════
// PRODUCTS GRID — SHARED RENDER
// ═══════════════════════════════════════════════════════════════
function createProductCard(product, delay) {
  const inWishlist = wishlist.has(product.id);
  const sale = product.originalPrice ? `<span class="price-sale">Save ${formatPrice(product.originalPrice - product.price)}</span>` : '';
  const origPrice = product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : '';
  const badge = product.badge ? `<div class="product-card-badge ${product.badge === 'Sale' ? 'sale' : ''}">${product.badge}</div>` : '';

  const div = document.createElement('div');
  div.className = 'product-card';
  div.style.transitionDelay = delay + 'ms';
  div.innerHTML = `
    <div class="product-card-img-wrap">
      ${badge}
      <img class="product-card-img" src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-card-actions">
        <button class="card-quick-add" data-id="${product.id}">Quick Add</button>
        <button class="card-wishlist-btn ${inWishlist ? 'active' : ''}" data-wid="${product.id}" aria-label="Add to wishlist">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${inWishlist ? '#BE185D' : 'none'}" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
    </div>
    <div class="product-card-info">
      <div class="product-card-name">${product.name}</div>
      <div class="product-card-sub">${product.sub}</div>
      <div class="product-card-price">
        <span class="price-current">${formatPrice(product.price)}</span>
        ${origPrice}
        ${sale}
      </div>
    </div>
  `;

  // Click on card body → product page
  div.addEventListener('click', (e) => {
    if (e.target.closest('.card-quick-add') || e.target.closest('.card-wishlist-btn')) return;
    navigateTo('product', { productId: product.id });
  });

  // Quick add
  div.querySelector('.card-quick-add').addEventListener('click', (e) => {
    e.stopPropagation();
    const size = product.sizes.find(s => !product.outOfStock.includes(s)) || product.sizes[0];
    addToCart(product.id, size, 0, 1);
  });

  // Wishlist
  div.querySelector('.card-wishlist-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWishlist(product.id, div.querySelector('.card-wishlist-btn'));
  });

  // Animate in with IntersectionObserver
  setTimeout(() => {
    div.classList.add('visible');
  }, 50 + delay);

  return div;
}

function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('active');
    btn.querySelector('svg').setAttribute('fill', 'none');
    showToast('Removed from wishlist');
  } else {
    wishlist.add(id);
    btn.classList.add('active');
    btn.querySelector('svg').setAttribute('fill', '#BE185D');
    showToast('Added to wishlist ♡');
  }
  saveWishlist();
}

// ═══════════════════════════════════════════════════════════════
// HOME PAGE — FEATURED GRID
// ═══════════════════════════════════════════════════════════════
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = PRODUCTS.slice(0, 4);
  grid.innerHTML = '';
  featured.forEach((p, i) => grid.appendChild(createProductCard(p, i * 80)));
}

// ═══════════════════════════════════════════════════════════════
// SHOP PAGE
// ═══════════════════════════════════════════════════════════════
function getFilteredSorted() {
  let list = currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentFilter);
  if (currentSort === 'price-asc') list = [...list].sort((a,b) => a.price - b.price);
  else if (currentSort === 'price-desc') list = [...list].sort((a,b) => b.price - a.price);
  else if (currentSort === 'newest') list = [...list].reverse();
  return list;
}

function renderShop() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = getFilteredSorted();
  list.forEach((p, i) => {
    const card = createProductCard(p, i * 60);
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px) scale(0.97)';
    grid.appendChild(card);
    setTimeout(() => { card.classList.add('visible'); }, 50 + i * 60);
  });
}

// Filter pills
document.getElementById('filterPills').addEventListener('click', (e) => {
  const pill = e.target.closest('.filter-pill');
  if (!pill) return;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  currentFilter = pill.dataset.filter;
  renderShop();
});

// Sort select
document.getElementById('sortSelect').addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderShop();
});

// ═══════════════════════════════════════════════════════════════
// PRODUCT PAGE
// ═══════════════════════════════════════════════════════════════
function renderProduct(id) {
  activeProductId = id;
  selectedColor = 0;
  selectedSize = null;
  qty = 1;
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const el = document.getElementById('productPageContent');
  const saleAmount = product.originalPrice ? `<span class="product-price-save">Save ${formatPrice(product.originalPrice - product.price)}</span>` : '';
  const origPriceHTML = product.originalPrice ? `<span class="product-price-original">${formatPrice(product.originalPrice)}</span>` : '';

  const thumbsHTML = product.images.map((img, i) => `
    <div class="product-thumb ${i === 0 ? 'active' : ''}" data-thumb="${i}" onclick="switchThumb(${i})">
      <img src="${img}" alt="View ${i+1}" loading="lazy" />
    </div>
  `).join('');

  const colorSwatchesHTML = product.colors.map((c, i) => `
    <div class="color-swatch ${i === 0 ? 'active' : ''}" style="background:${c}" title="${colorName(c)}" onclick="selectColor(${i}, this)"></div>
  `).join('');

  const sizeBtnsHTML = product.sizes.map(s => `
    <button class="size-btn ${product.outOfStock.includes(s) ? 'out-of-stock' : ''}" 
      onclick="${product.outOfStock.includes(s) ? '' : `selectSize('${s}', this)`}"
      ${product.outOfStock.includes(s) ? 'disabled title="Out of stock"' : ''}>${s}</button>
  `).join('');

  const reviewsHTML = product.reviews.length > 0
    ? product.reviews.map(r => `
        <div class="review-item">
          <div class="review-header">
            <div class="stars">${renderStars(r.rating)}</div>
            <span class="reviewer-name">${r.name}</span>
            <span class="review-date">${r.date}</span>
          </div>
          <p class="review-text">${r.text}</p>
        </div>
      `).join('')
    : '<p>No reviews yet. Be the first to share your thoughts!</p>';

  const recommendedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 4);
  const recommendedHTML = recommendedProducts.map((p, i) => {
    const badge = p.badge ? `<div class="product-card-badge ${p.badge === 'Sale' ? 'sale' : ''}">${p.badge}</div>` : '';
    const origP = p.originalPrice ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : '';
    return `
      <div class="product-card visible" style="cursor:pointer" onclick="navigateTo('product', {productId:${p.id}})">
        <div class="product-card-img-wrap">
          ${badge}
          <img class="product-card-img" src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-card-info">
          <div class="product-card-name">${p.name}</div>
          <div class="product-card-sub">${p.sub}</div>
          <div class="product-card-price">
            <span class="price-current">${formatPrice(p.price)}</span>
            ${origP}
          </div>
        </div>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="product-breadcrumbs">
      <a data-page="home">Home</a>
      <span>›</span>
      <a data-page="shop">Shop</a>
      <span>›</span>
      <span>${product.name}</span>
    </div>

    <div class="product-detail-grid">
      <!-- GALLERY -->
      <div class="product-gallery">
        <div class="product-main-img-wrap" id="mainImgWrap">
          <img class="product-main-img" src="${product.images[0]}" alt="${product.name}" id="mainImg" />
        </div>
        <div class="product-thumb-strip">${thumbsHTML}</div>
      </div>

      <!-- PRODUCT INFO -->
      <div class="product-info">
        <div class="product-info-header">
          ${product.badge ? `<span class="product-badge-tag">${product.badge}</span>` : ''}
          <h1 class="product-name">${product.name}</h1>
          <div class="product-rating">
            <div class="stars">${renderStars(product.rating)}</div>
            <span class="rating-count"><a onclick="switchTab('reviews')">${product.reviewCount} reviews</a></span>
          </div>
        </div>

        <div class="product-price-wrap">
          <span class="product-price-current">${formatPrice(product.price)}</span>
          ${origPriceHTML}
          ${saleAmount}
        </div>

        <div class="product-divider"></div>

        <!-- Color -->
        <div>
          <div class="option-label">Color: <span class="option-value" id="colorLabel">${colorName(product.colors[0])}</span></div>
          <div class="color-swatches">${colorSwatchesHTML}</div>
        </div>

        <!-- Size -->
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div class="option-label">Size: <span class="option-value" id="sizeLabel">Select a size</span></div>
            <span class="size-guide-link" onclick="showToast('Size guide coming soon')">Size Guide</span>
          </div>
          <div class="size-grid">${sizeBtnsHTML}</div>
        </div>

        <!-- Quantity -->
        <div>
          <div class="option-label">Quantity</div>
          <div class="qty-selector">
            <div class="qty-control">
              <button class="qty-control-btn" onclick="changeQty(-1)">−</button>
              <div class="qty-display" id="qtyDisplay">1</div>
              <button class="qty-control-btn" onclick="changeQty(1)">+</button>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="product-ctas">
          <button class="btn-add-to-cart" id="addToCartBtn" onclick="handleAddToCart()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Cart
          </button>
          <button class="btn-wishlist-product" id="wishlistProductBtn" onclick="handleProductWishlist()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${wishlist.has(id) ? '#BE185D' : 'none'}" stroke="${wishlist.has(id) ? '#BE185D' : 'currentColor'}" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            ${wishlist.has(id) ? 'Saved to Wishlist' : 'Save to Wishlist'}
          </button>
        </div>

        <!-- Trust Badges -->
        <div class="trust-badges">
          <div class="trust-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            <span class="trust-badge-title">Free Shipping</span>
            <span class="trust-badge-sub">Orders over $150</span>
          </div>
          <div class="trust-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            <span class="trust-badge-title">Free Returns</span>
            <span class="trust-badge-sub">Within 30 days</span>
          </div>
          <div class="trust-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span class="trust-badge-title">Secure Pay</span>
            <span class="trust-badge-sub">256-bit SSL</span>
          </div>
        </div>

        <!-- Description -->
        <p style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.8;">${product.description}</p>
        <div style="font-size:0.72rem;color:var(--color-text-faint);letter-spacing:0.06em;">SKU: ${product.sku}</div>

        <!-- Tabs -->
        <div class="product-tabs">
          <div class="tab-nav">
            <button class="tab-btn active" onclick="switchTab('details')">Details</button>
            <button class="tab-btn" onclick="switchTab('care')">Care</button>
            <button class="tab-btn" onclick="switchTab('reviews')">Reviews (${product.reviewCount})</button>
          </div>
          <div class="tab-panel active" id="tab-details">
            <ul>${product.details.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          <div class="tab-panel" id="tab-care">
            <ul>${product.care.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
          <div class="tab-panel" id="tab-reviews">
            <div class="reviews-summary">
              <div class="review-avg">${product.rating}</div>
              <div>
                <div class="stars">${renderStars(product.rating)}</div>
                <div style="font-size:0.8rem;color:var(--color-text-muted);margin-top:4px">Based on ${product.reviewCount} reviews</div>
              </div>
            </div>
            ${reviewsHTML}
          </div>
        </div>
      </div>
    </div>

    <!-- RECOMMENDED -->
    <div class="recommended-section">
      <div class="section-header" style="text-align:left;margin-bottom:var(--space-xl)">
        <span class="section-eyebrow">You may also like</span>
        <h2 class="section-title" style="font-size:1.8rem">Complete the Look</h2>
      </div>
      <div class="products-grid">${recommendedHTML}</div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>&copy; 2026 MAISON. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  `;
}

window.switchThumb = function(i) {
  const product = PRODUCTS.find(p => p.id === activeProductId);
  if (!product) return;
  document.getElementById('mainImg').src = product.images[i];
  document.querySelectorAll('.product-thumb').forEach((t, idx) => t.classList.toggle('active', idx === i));
};

window.selectColor = function(i, el) {
  selectedColor = i;
  const product = PRODUCTS.find(p => p.id === activeProductId);
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('colorLabel').textContent = colorName(product.colors[i]);
};

window.selectSize = function(size, el) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('sizeLabel').textContent = size;
};

window.changeQty = function(delta) {
  qty = Math.max(1, qty + delta);
  document.getElementById('qtyDisplay').textContent = qty;
};

window.handleAddToCart = function() {
  if (!selectedSize) { showToast('Please select a size first'); return; }
  addToCart(activeProductId, selectedSize, selectedColor, qty);
};

window.handleProductWishlist = function() {
  const btn = document.getElementById('wishlistProductBtn');
  const svgEl = btn.querySelector('svg');
  if (wishlist.has(activeProductId)) {
    wishlist.delete(activeProductId);
    svgEl.setAttribute('fill', 'none'); svgEl.setAttribute('stroke', 'currentColor');
    btn.innerHTML = btn.innerHTML.replace('Saved to Wishlist', 'Save to Wishlist');
    showToast('Removed from wishlist');
  } else {
    wishlist.add(activeProductId);
    svgEl.setAttribute('fill', '#BE185D'); svgEl.setAttribute('stroke', '#BE185D');
    btn.innerHTML = btn.innerHTML.replace('Save to Wishlist', 'Saved to Wishlist');
    showToast('Added to wishlist ♡');
  }
  saveWishlist();
};

window.switchTab = function(tab) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    const tabs = ['details', 'care', 'reviews'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('tab-' + tab);
  if (panel) panel.classList.add('active');
  if (tab === 'reviews') panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// ═══════════════════════════════════════════════════════════════
// CHECKOUT PAGE
// ═══════════════════════════════════════════════════════════════
function renderCheckout() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 150 ? 0 : 12.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const itemsHTML = cart.length > 0 ? cart.map(item => `
    <div class="checkout-order-item">
      <div class="checkout-order-img">
        <img src="${item.image}" alt="${item.name}" />
        <span class="item-badge">${item.qty}</span>
      </div>
      <div>
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-variant">${item.sub}</div>
      </div>
      <div class="checkout-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('') : `<p style="color:var(--color-text-muted);font-size:0.85rem">Your cart is empty. <a style="cursor:pointer;text-decoration:underline" data-page="shop">Continue shopping</a></p>`;

  document.getElementById('checkoutContent').innerHTML = `
    <div class="checkout-grid">
      <!-- FORM SIDE -->
      <div class="checkout-form-col">
        <div class="checkout-brand">MAISON</div>

        <!-- Contact -->
        <h2 class="checkout-step-title">Contact</h2>
        <div class="checkout-form-group">
          <label class="checkout-label" for="co-email">Email</label>
          <input class="checkout-input" id="co-email" type="email" placeholder="you@example.com" />
        </div>
        <div class="checkout-form-group" style="display:flex;align-items:center;gap:8px">
          <input type="checkbox" id="co-news" style="accent-color:var(--color-text)" />
          <label for="co-news" style="font-size:0.8rem;color:var(--color-text-muted)">Email me with news and exclusive offers</label>
        </div>

        <div style="height:var(--space-xl)"></div>

        <!-- Delivery -->
        <h2 class="checkout-step-title">Delivery</h2>
        <div class="checkout-form-group">
          <label class="checkout-label" for="co-country">Country / Region</label>
          <select class="checkout-select" id="co-country">
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>France</option>
            <option>Germany</option>
            <option>India</option>
            <option>Japan</option>
          </select>
        </div>
        <div class="checkout-form-row">
          <div class="checkout-form-group">
            <label class="checkout-label" for="co-fname">First name</label>
            <input class="checkout-input" id="co-fname" type="text" placeholder="Charlotte" />
          </div>
          <div class="checkout-form-group">
            <label class="checkout-label" for="co-lname">Last name</label>
            <input class="checkout-input" id="co-lname" type="text" placeholder="Dupont" />
          </div>
        </div>
        <div class="checkout-form-group">
          <label class="checkout-label" for="co-address">Address</label>
          <input class="checkout-input" id="co-address" type="text" placeholder="12 Rue de la Paix" />
        </div>
        <div class="checkout-form-group">
          <label class="checkout-label" for="co-apt">Apartment, suite, etc. (optional)</label>
          <input class="checkout-input" id="co-apt" type="text" placeholder="" />
        </div>
        <div class="checkout-form-row">
          <div class="checkout-form-group">
            <label class="checkout-label" for="co-city">City</label>
            <input class="checkout-input" id="co-city" type="text" placeholder="Paris" />
          </div>
          <div class="checkout-form-group">
            <label class="checkout-label" for="co-zip">ZIP / Postal code</label>
            <input class="checkout-input" id="co-zip" type="text" placeholder="75001" />
          </div>
        </div>
        <div class="checkout-form-group">
          <label class="checkout-label" for="co-phone">Phone (optional)</label>
          <input class="checkout-input" id="co-phone" type="tel" placeholder="+1 (555) 000-0000" />
        </div>

        <div style="height:var(--space-xl)"></div>

        <!-- Payment -->
        <h2 class="checkout-step-title">Payment</h2>
        <p style="font-size:0.78rem;color:var(--color-text-muted);margin-bottom:var(--space-md)">All transactions are secure and encrypted.</p>
        <div class="payment-methods">
          <button class="payment-method-btn active" id="pm-card">Credit Card</button>
          <button class="payment-method-btn" id="pm-paypal">PayPal</button>
          <button class="payment-method-btn" id="pm-apple">Apple Pay</button>
        </div>
        <div class="payment-section">
          <div class="checkout-form-group">
            <label class="checkout-label" for="co-card">Card number</label>
            <input class="checkout-input" id="co-card" type="text" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNumber(this)" />
          </div>
          <div class="checkout-form-row">
            <div class="checkout-form-group">
              <label class="checkout-label" for="co-exp">Expiry date</label>
              <input class="checkout-input" id="co-exp" type="text" placeholder="MM / YY" maxlength="7" oninput="formatExpiry(this)" />
            </div>
            <div class="checkout-form-group">
              <label class="checkout-label" for="co-cvv">Security code</label>
              <input class="checkout-input" id="co-cvv" type="text" placeholder="CVV" maxlength="4" />
            </div>
          </div>
          <div class="card-icon-row">
            <span class="card-icon">VISA</span>
            <span class="card-icon">MC</span>
            <span class="card-icon">AMEX</span>
            <span class="card-icon">DISC</span>
          </div>
        </div>

        <button class="checkout-submit-btn" onclick="handleCheckoutSubmit()">
          Pay ${formatPrice(total)}
        </button>
        <div class="checkout-secure-note">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Secure, encrypted payment</span>
        </div>
      </div>

      <!-- ORDER SUMMARY SIDE -->
      <div class="checkout-summary-col">
        <h3 style="font-family:var(--font-serif);font-size:1.2rem;font-weight:500;margin-bottom:var(--space-lg)">Order Summary</h3>
        <div class="checkout-order-items">${itemsHTML}</div>

        <div class="coupon-row">
          <input type="text" class="coupon-input" placeholder="Discount code" id="couponInput" />
          <button class="coupon-btn" onclick="applyCoupon()">Apply</button>
        </div>

        <div class="order-totals">
          <div class="order-total-row">
            <span class="order-total-label">Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div class="order-total-row">
            <span class="order-total-label">Shipping</span>
            <span>${shipping === 0 ? '<span style="color:var(--color-success)">Free</span>' : formatPrice(shipping)}</span>
          </div>
          <div class="order-total-row">
            <span class="order-total-label">Estimated Tax</span>
            <span>${formatPrice(tax)}</span>
          </div>
          <div class="order-total-row total-bold">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
          </div>
        </div>

        <div style="margin-top:var(--space-xl);display:flex;flex-direction:column;gap:var(--space-sm)">
          <div style="display:flex;align-items:center;gap:8px;font-size:0.75rem;color:var(--color-text-muted)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            <span>Free standard shipping on orders over $150</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:0.75rem;color:var(--color-text-muted)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            <span>Free returns within 30 days</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Payment method switching
  ['card', 'paypal', 'apple'].forEach(pm => {
    const btn = document.getElementById('pm-' + pm);
    if (btn) btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

window.formatCardNumber = function(input) {
  let val = input.value.replace(/\D/g, '').slice(0, 16);
  input.value = val.replace(/(\d{4})(?=\d)/g, '$1 ');
};
window.formatExpiry = function(input) {
  let val = input.value.replace(/\D/g, '').slice(0, 4);
  if (val.length >= 2) val = val.slice(0,2) + ' / ' + val.slice(2);
  input.value = val;
};
window.applyCoupon = function() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  if (code === 'MAISON10') showToast('10% discount applied! ✓', 'success');
  else showToast('Invalid coupon code');
};
window.handleCheckoutSubmit = function() {
  // Simulate order placement
  cart = [];
  saveCart();
  updateCartCount();
  showToast('Order placed! Thank you for shopping with MAISON ✓', 'success');
  setTimeout(() => navigateTo('home'), 2000);
};

// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════════════════════
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => { entry.target.classList.add('revealed'); }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// NEWSLETTER
// ═══════════════════════════════════════════════════════════════
window.handleNewsletter = function(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  showToast(`Subscribed! Welcome to MAISON, ${email.split('@')[0]} ✓`, 'success');
  document.getElementById('newsletterForm').reset();
};

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
function init() {
  // Show home page
  const homePage = document.getElementById('page-home');
  homePage.style.display = 'block';
  requestAnimationFrame(() => homePage.classList.add('active'));

  renderFeatured();
  updateCartCount();
  initReveal();

  // Intersection observer for product cards
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.product-card').forEach(c => cardObserver.observe(c));
}

document.addEventListener('DOMContentLoaded', init);

// Make navigateTo globally accessible for inline onclick handlers
window.navigateTo = navigateTo;
