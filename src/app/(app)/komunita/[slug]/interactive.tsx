'use client'

import { useRef, useState, useTransition } from 'react'
import type { CommunityPost } from '@/lib/db/repo-community'
import {
  addPostAction,
  addReplyAction,
  deletePostAction,
  heartAction,
} from '@/app/actions/community'

export function PostComposer({ slug }: { slug: string }) {
  const ref = useRef<HTMLFormElement>(null)
  const [pending, startTransition] = useTransition()

  return (
    <form
      ref={ref}
      action={(fd) =>
        startTransition(async () => {
          await addPostAction(fd)
          ref.current?.reset()
        })
      }
      className="surface p-5"
    >
      <input type="hidden" name="slug" value={slug} />
      <textarea
        name="body"
        rows={3}
        required
        placeholder="Co máte na srdci? Otázka, radost, těžký den — cokoliv."
        className="w-full resize-none bg-transparent px-2 py-1 text-[0.9375rem] leading-relaxed outline-none placeholder:text-[var(--fg-faint)]"
      />
      <div className="mt-3 flex items-center justify-between gap-4 border-t border-[var(--line)] pt-3">
        <p className="text-xs text-faint">Nikdo nevidí vaše zdravotní údaje.</p>
        <button type="submit" className="btn btn-primary !py-2 !text-[0.8125rem]" disabled={pending}>
          {pending ? 'Odesílám…' : 'Sdílet'}
        </button>
      </div>
    </form>
  )
}

export function PostItem({
  post,
  slug,
  currentUserId,
  phaseName,
}: {
  post: CommunityPost
  slug: string
  currentUserId: string
  phaseName: string | null
}) {
  const [showReply, setShowReply] = useState(false)
  const [hearted, setHearted] = useState(Boolean(post.hearted))
  const [hearts, setHearts] = useState(post.hearts)
  const [, startTransition] = useTransition()
  const replyRef = useRef<HTMLFormElement>(null)

  const toggleHeart = () => {
    setHearted((v) => !v)
    setHearts((n) => (hearted ? Math.max(0, n - 1) : n + 1))
    startTransition(() => void heartAction(post.id, 'post', slug))
  }

  return (
    <article className="surface p-6">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-[0.875rem] font-medium">{post.authorName}</span>
        <span className="text-xs text-faint">
          {phaseName && `${phaseName} · `}
          {relativeTime(post.createdAt)}
        </span>
      </header>

      <p className="mt-3 whitespace-pre-line text-[0.9375rem] leading-relaxed">{post.body}</p>

      <footer className="mt-4 flex items-center gap-4 border-t border-[var(--line)] pt-3">
        <button
          onClick={toggleHeart}
          aria-pressed={hearted}
          className={`inline-flex items-center gap-1.5 text-[0.8125rem] transition-colors ${
            hearted ? 'text-[var(--color-blush-deep)]' : 'text-faint hover:text-[var(--fg-soft)]'
          }`}
        >
          <span aria-hidden>{hearted ? '♥' : '♡'}</span>
          {hearts > 0 && hearts}
        </button>

        <button
          onClick={() => setShowReply((v) => !v)}
          className="text-[0.8125rem] text-faint transition-colors hover:text-[var(--fg-soft)]"
        >
          Odpovědět
          {post.replies && post.replies.length > 0 && ` (${post.replies.length})`}
        </button>

        {post.userId === currentUserId && (
          <button
            onClick={() => startTransition(() => void deletePostAction(post.id, slug))}
            className="ml-auto text-[0.8125rem] text-faint transition-colors hover:text-[var(--color-blush-deep)]"
          >
            Smazat
          </button>
        )}
      </footer>

      {post.replies && post.replies.length > 0 && (
        <div className="mt-4 space-y-3 border-l-2 border-[var(--line)] pl-5">
          {post.replies.map((r) => (
            <div key={r.id}>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[0.8125rem] font-medium">{r.authorName}</span>
                <span className="text-xs text-faint">{relativeTime(r.createdAt)}</span>
              </div>
              <p className="mt-1 whitespace-pre-line text-[0.875rem] leading-relaxed text-soft">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {showReply && (
        <form
          ref={replyRef}
          action={(fd) =>
            startTransition(async () => {
              await addReplyAction(fd)
              replyRef.current?.reset()
              setShowReply(false)
            })
          }
          className="mt-4 border-l-2 border-[var(--line)] pl-5"
        >
          <input type="hidden" name="postId" value={post.id} />
          <input type="hidden" name="slug" value={slug} />
          <textarea
            name="body"
            rows={2}
            required
            autoFocus
            placeholder="Napište odpověď…"
            className="field resize-none !text-[0.875rem]"
          />
          <div className="mt-2 flex gap-2">
            <button type="submit" className="btn btn-secondary !py-1.5 !text-[0.8125rem]">
              Odeslat
            </button>
            <button
              type="button"
              onClick={() => setShowReply(false)}
              className="btn btn-ghost !py-1.5 !text-[0.8125rem]"
            >
              Zrušit
            </button>
          </div>
        </form>
      )}
    </article>
  )
}

function relativeTime(iso: string): string {
  const diff = Date.now() - Date.parse(iso)
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 1) return 'právě teď'
  if (minutes < 60) return `před ${minutes} min`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `před ${hours} h`
  const days = Math.floor(hours / 24)
  if (days === 1) return 'včera'
  if (days < 30) return `před ${days} dny`
  const months = Math.floor(days / 30)
  return `před ${months} měs.`
}
